import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
// import * as auth from '../../../../../assets/js/auth.js';

import { Observable } from 'rxjs';

// Services
import { MocService } from '../../../../core/services/http/moc/moc.service';
import { SweetAlertService } from '../../../../core/services/sweet-alert/sweet-alert.service';

// declare function fnAccion(acc): any;

@Component({
  selector: 'app-page-cedula',
  templateUrl: './page-cedula.component.html',
  styleUrls: ['./page-cedula.component.css']
})
export class PageCedulaComponent implements OnInit {
  module = 'carnet';
  validacion: any;

  GETRUT		= 100;
	GETFINGER	= 101;
	VALIDATE	= 102;

  onlineStatus: Observable<Event>;

  constructor(
    private moc: MocService,
    private router: Router,
    public sweetAlertService: SweetAlertService
  ) {
    this.moc.messages.subscribe(msg => {
      console.log("Response from websocket server:", msg);
      if (msg['Error'].Code != 0) {
        this.sweetAlertService.swalInfo(msg['Error'].Desc);
      } else {
        switch (msg['Action']) {
          case this.GETRUT:
          break;
          case this.GETFINGER:
            this.onChangeModule('huella');
          break;
          case this.VALIDATE:
            this.router.navigate(['login']);
            this.moc.wsClose();
          break;
          default:
            console.log('R : OTRO');
          break;
        }
      }
    });
  }

  ngOnInit() {
  }

  async ngAfterViewInit() {
    // fnAccion('GetRut');
    // this.sendMessage();
  }

  onChangeModule(e: any) {
    this.module = e;
  }

}
