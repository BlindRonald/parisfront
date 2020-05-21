import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';
import { DomSanitizer } from '@angular/platform-browser';

// Components
import { ModalComponent } from '../shared/components/modal/modal.component';

// Services
import { ModalsService } from '../../core/services/modals/modals.service';
import { PdfServiceService } from '../../core/services/pdf/pdf-service.service';
import { SweetAlertService } from '../../core/services/sweet-alert/sweet-alert.service';
import { TicketService } from '../../core/services/http/ticket/ticket.service';
import { BoletaService } from '../../core/services/http/boleta/boleta.service';

@Component({
  selector: 'app-page-menu',
  templateUrl: './page-menu.component.html',
  styleUrls: ['./page-menu.component.css']
})
export class PageMenuComponent implements OnInit, AfterViewInit {
  img = 'assets/img/slider-home.png';
  title = '';
  boleta_n = '';

  constructor(
    private router: Router,
    private sanitizer:DomSanitizer,
    public sweetAlertService: SweetAlertService,
    private pdfService: PdfServiceService,
    public ticketService: TicketService,
    public boletaService: BoletaService,
    private modalService: ModalsService
  ) {

  }

  ngOnInit() {
  }

  ngAfterViewInit() {
    let dato = JSON.parse(localStorage.getItem('boleta_info'));
    setTimeout(function(){
      this.boleta_n = dato.transaction_id;
    }, 1000);
  }

  menu(e: any, action: string) {
    e.preventDefault();
    this.router.navigate([action]);
  }

  async openModalBoleta() {
    /*const options = { class: 'modal-pdf', initialState: { tipo: 'pdf', mensaje: '', imagen: 'assets/img/electronica.gif' }};
    this.modalService.openModal(ModalComponent, options);
    let boletas = await this.boletaService.ejemplo();
    const base64 = boletas['base64'];
    this.pdfService.showPdf({ base64, zoom: 0.9 });*/
    this.sweetAlertService.swalLoading();

    let data = await this.boletaService.ObtenerBoleta(this.boleta_n);
    if (data['status'] == false || data['code'] == 0) {
      console.log("error: ", data['message']);
      this.sweetAlertService.swalClose();
    } else {
      // const base64 = 'data:application/pdf;base64,' + data['data']['base64'];
      this.sweetAlertService.swalClose();
      const base64 = data['data']['base64'];
      this.pdfService.showPdf({ base64, zoom: 1.0 });
    }
  }

  async modalPrint() {
    let datos = JSON.parse(localStorage.getItem('boleta_info'));
    let data = this.ticketService.TicketPrint(datos.transaction_date, datos.localNumber, datos.numTerTsl, datos.numTranTsl, datos.transaction_id);
    if (data['status'] == false || data['code'] == 0) {
      console.log("error: ", data['message']);
    } else {

    };
    const options = { class: 'print-text', initialState: { tipo: 'imprimir', mensaje: 'Imprimiendo', imagen: 'assets/img/print.gif', timeout: 5000}};
    this.modalService.openModal(ModalComponent, options);
  }

  avanzar() {
    this.router.navigate(['seguimiento']);
  }

  logout() {
    localStorage.clear();
    this.router.navigate(['home']);
  }

}
