import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

// Services
import { MocService } from '../../core/services/http/moc/moc.service';

@Component({
  selector: 'app-page-home',
  templateUrl: './page-home.component.html',
  styleUrls: ['./page-home.component.css']
})
export class PageHomeComponent implements OnInit {
  disabled = false;

  GETRUT		= 100;
	GETFINGER	= 101;
	VALIDATE	= 102;
  iTOcnx		= 0;
	iTO			  = 10;	// seg
	iTOint		= 0;
  
  constructor(
    private moc: MocService,
    private router: Router
  ) {
    /*this.moc.messages.subscribe(msg => {
      console.log("Response from websocket server:", msg);
    });*/
  }

  ngOnInit() {

  }

  ngAfterViewInit() {

  }

  private message = {
    Action	: this.GETRUT,
		Timeout	: this.iTO
  };

  sendMessage() { 
    this.moc.messages.next(this.message);
  };

  async getAuthorization(event: any) {
    event.preventDefault();
    this.sendMessage();
    this.router.navigate(['cedula']);
  }

}
