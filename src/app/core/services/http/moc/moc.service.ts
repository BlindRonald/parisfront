import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

import { WebsocketService } from '../../../services/websocket/websocket.service';

import { API_ENDPOINT } from '../../../../config/config';

// Config
import * as configuracion from '../../../../../assets/config/config.json';


export interface Message {
  Action	: number,
	Timeout	: number
}

@Injectable({
  providedIn: 'root'
})
export class MocService {
  private url_socket = API_ENDPOINT.url_websocket;
  urlws = "ws://127.0.0.1:8182/";
	GETRUT		= 100;
	GETFINGER	= 101;
	VALIDATE	= 102;
	// mytimer		= setInterval('fnTimer()', 1000);
	bCnxOK		= false;
	iTOcnx		= 0;
	iTO			  = 10;	// seg
  iTOint		= 0;
  
  public messages: Subject<Message>;

  constructor(
    private webSocketService: WebsocketService
  ) {
    this.messages = <Subject<Message>>webSocketService
    .connect(configuracion['url_websocket'])
    .map((response: MessageEvent): Message => {
      this.onMessage(response);
      let data = JSON.parse(response.data);
      return data;
    });
  }

  onMessage(evt) {
    var oRsp = JSON.parse(evt.data), acc = '';
    console.log('rsp = ' + evt.data);
		this.iTOint = 0;
		if (oRsp.Error.Code != 0) {
			return this.viewErr(oRsp.Error.Code, oRsp.Error.Desc, false);
    }
    
    switch (oRsp.Action) {
			case this.GETRUT:
				console.log('R : GETRUT');
				acc = 'GetFinger';
			break;

			case this.GETFINGER:
        console.log('R : GETFINGER');
        acc = 'SetFinger';
			break;

			case this.VALIDATE:
				console.log('R : VALIDATE');
			break;

			default:
				console.log('R : OTRO');
			break;
		}
		if (acc != '') this.fnAccion(acc);
  }

  fnAccion (acc) {
    var oReq;
  
    switch (acc) {
      case 'Salir':
        return false;
      break;
  
      case 'GetRut': 
        oReq = {
          Action	: this.GETRUT,
          Timeout	: this.iTO
        };
      break;
  
      case 'GetFinger':
        oReq = {
          Action	: this.GETFINGER,
          Timeout	: this.iTO
        };
      break;
  
      case 'SetFinger':
        oReq = {
          Action	: this.VALIDATE,
          Timeout	: this.iTO
        };
      break;
    }
    
    this.messages.next(oReq);
    this.iTOint = this.iTO + 10;
  }
  
  fnTimer() {
    if (this.iTOcnx > 0) {
      if (--this.iTOcnx == 0) this.messages.complete(); //start();
    }
    if (!this.bCnxOK) return;
  
    if (this.iTOint > 0) {
      if (--this.iTOint == 0) this.viewErr(0, 'Sistema no responde !', false);
    }
  }

  viewErr(iCErr, sDErr, fTO) {
    console.error('Error [%d] : %s', iCErr, sDErr);
    if (fTO) this.iTOcnx = 2;		// 2 seg
  
    if (iCErr > 0) {
      // retornar código
    }
    return false;
  }

  wsClose() {
    this.messages.complete();
  }
}