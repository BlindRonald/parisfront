import { Component, OnInit } from '@angular/core';

// Services
import { ModalsService } from 'src/app/core/services/modals/modals.service';


@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {
  mensaje: string;
  tipo = '';
  modulo: string;
  textoUsabilidad: string;
  imagen = '';
  data = '';
  timeout = 0;

  constructor(private modalService: ModalsService) {

  }

  ngOnInit() {
    if (Number(this.timeout) !== 0) {
      setTimeout(() => {
        this.closeModal();
      }, this.timeout);
    }
  }

  closeModal() {
    this.modalService.closeModal();
    this.tipo = '';
    this.mensaje = '';
    this.imagen = '';
    this.data = '';
    this.timeout = 0;
  }
}
