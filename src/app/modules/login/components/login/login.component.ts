import { Component, OnInit, AfterViewInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { KeyboardComponent } from '../../../../custom/keyboard/keyboard.component';
import { Subscription } from 'rxjs';

// Services
import { SeguimientoService } from '../../../../core/services/http/seguimiento/seguimiento.service';
import { SweetAlertService } from '../../../../core/services/sweet-alert/sweet-alert.service';
import { ModalTecladoService } from '../../../../core/services/modals/modal-teclado.service';
import { EmitDataService } from '../../../../core/services/emit-data/emit-data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit, AfterViewInit {
  subscription: Subscription = new Subscription();
  formBusqueda: FormGroup;

  constructor(
    private router: Router,
    public seguimientoService: SeguimientoService,
    private modalsTecladoService: ModalTecladoService,
    private emitTecladoService: EmitDataService,
    public sweetAlert: SweetAlertService,
    private formBuilder: FormBuilder
  ) {

  }

  ngOnInit() {
    this.formBusqueda = this.formBuilder.group({
      busqueda: ['', [Validators.required]]
    });

    this.keyboardSubscription();
  }

  ngAfterViewInit() {
  }

  keyboardSubscription() {
    this.subscription.add(
      this.emitTecladoService.dataInput.subscribe(data => {
        switch (data.input) {
          case 'inputBoleta':
            this.formBusqueda.patchValue({ busqueda: data.texto });
            break;
        }
      })
    );
  }

  desplegarAlpha(model: string) {
    const options = { class: 'modal-teclado modal-inicio', initialState: {} };
    this.modalsTecladoService.openModal(KeyboardComponent, options);
    this.emitTecladoService.enviarModel({
      input: model,
      teclado: 'numerico',
      texto: this.formBusqueda.get('busqueda').value
    });
  }

  async buscar() {
    this.sweetAlert.swalLoading();
    if (this.formBusqueda.valid) {
      // console.log(this.formBusqueda.value['busqueda']);
      let boleta = this.formBusqueda.value['busqueda'];
      let data = await this.seguimientoService.Seguimiento(boleta);
      if (data['status'] == false || data['code'] == 0 || data['data']['data'] == '') {
        this.sweetAlert.swalClose();
        // this.sweetAlert.swalError1('Numero Boleta invalido');
        this.sweetAlert.swalError1(data['message']);
      } else {
        let datos = data['data'];
        localStorage.setItem('boleta_info', JSON.stringify(datos['data'][0]));
        this.sweetAlert.swalClose();
        this.router.navigate(['menu']);
      };
    }
  }

}
