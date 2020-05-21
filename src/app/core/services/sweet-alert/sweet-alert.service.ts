import { Injectable, Output, EventEmitter } from '@angular/core';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class SweetAlertService {

  @Output() confirmation: EventEmitter<any> = new EventEmitter();
  constructor() { }

  swalInfo(message: string): void {
    Swal.fire(message);
  }

   swalError(): void {
    Swal.fire({
      icon: 'error',
      title: 'Ups...',
      text: '¡Algo salió mal!',
      confirmButtonColor: '#36ABAC'
    });
  }

  swalError1(texto): void {
    Swal.fire({
      icon: 'error',
      title: 'Ups...',
      text: texto,
      confirmButtonColor: '#36ABAC'
    });
  }

  swalConfirmDialog(data): void {
    Swal.fire({
      title: '¿Estás seguro?',
      text: '¡No podrás revertir esto!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#36ABAC',
      cancelButtonColor: '#E06162',
      cancelButtonText: 'Cancelar',
      confirmButtonText: 'Si, eliminar'
    }).then((result) => {
      if (result.value) {
        this.confirmation.emit(data);
      }
    });
  }

  swalPrint(text: string): void {
    Swal.fire({
      imageUrl: 'assets/img/print.gif',
      imageAlt: 'Imprimiendo',
      imageHeight: 249,
      imageWidth: 224,
      title: text,
      width: '100%',
      position: 'center',
      showConfirmButton: false,
      customClass: {
        popup: 'border-blue',
        title: 'flex-direction',
      }
    });
  }

  swalLoading(): void {
    const html = '<div><img src="assets/img/loading.gif"></div>';
    Swal.fire({
      html,
      position: 'center',
      showConfirmButton: false,
      background: 'bottom',
      backdrop: 'rgba(255,255,255,0.4)',
      allowOutsideClick: false,
      customClass: {
        title: 'spinner-border'
      }
    });
  }

   swalErrorPromise(message: string): Promise<any> {
    return Swal.fire({
      icon: 'error',
      title: '¡Algo salió mal!',
      text: message,
      confirmButtonColor: '#36ABAC'
    });
  }

  swalClose(): void {
    Swal.close();
  }
}
