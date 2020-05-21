import { Injectable } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';

@Injectable({
  providedIn: 'root'
})
export class ModalTecladoService {
  public modalRef: BsModalRef;
  config = {
    backdrop: false,
    ignoreBackdropClick: false
  };

  constructor(private modalService: BsModalService) {

  }

  openModal(component, options) {
    const config = { ...this.config, ...options };
    this.modalRef = this.modalService.show(component, config);
  }

  closeModal() {
    if (this.modalRef !== undefined) {
      this.modalRef.hide();
    }
  }

}
