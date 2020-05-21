import { Component, OnInit, OnDestroy } from '@angular/core';
import { ModalTecladoService } from 'src/app/core/services/modals/modal-teclado.service';
import { EmitDataService } from '../../core/services/emit-data/emit-data.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-keyboard',
  templateUrl: './keyboard.component.html',
  styleUrls: ['./keyboard.component.css']
})
export class KeyboardComponent implements OnInit, OnDestroy {

  subscripcion: Subscription;
  desde = 0;
  hasta = 0;
  texto:string;
  model:string;

  teclas = [
  ];

  numerico = [
    [{ancho:'1', accion:'add', text:'1'}, {ancho:'1', accion:'add', text:'2'}, {ancho:'1', accion:'add', text:'3'}],
    [{ancho:'1', accion:'add', text:'4'}, {ancho:'1', accion:'add', text:'5'}, {ancho:'1', accion:'add', text:'6'}],
    [{ancho:'1', accion:'add', text:'7'}, {ancho:'1', accion:'add', text:'8'}, {ancho:'1', accion:'add', text:'9'}],
    [{ancho:'0', accion:'', text:''}, {ancho:'1', accion:'add', text:'0'}, {ancho:'1', accion:'delete', text:'delete'}],
    [{ancho:'3', accion:'enter', text:'Aceptar'}],
    [{ancho:'3', accion:'suprimir', text:'Eliminar'}]
  ];
  rut = [
    [{ancho:'1', accion:'add', text:'1'}, {ancho:'1', accion:'add', text:'2'}, {ancho:'1', accion:'add', text:'3'}],
    [{ancho:'1', accion:'add', text:'4'}, {ancho:'1', accion:'add', text:'5'}, {ancho:'1', accion:'add', text:'6'}],
    [{ancho:'1', accion:'add', text:'7'}, {ancho:'1', accion:'add', text:'8'}, {ancho:'1', accion:'add', text:'9'}],
    [{ancho:'1', accion:'add', text:'K'}, {ancho:'1', accion:'add', text:'0'}, {ancho:'1', accion:'delete', text:'delete'}],
    [{ancho:'3', accion:'enter', text:'Aceptar'}],
    [{ancho:'3', accion:'suprimir', text:'Eliminar'}]
  ];
  alphaNumerico = [
    [
      {ancho:'1', accion:'add', text:'1'},
      {ancho:'1', accion:'add', text:'2'},
      {ancho:'1', accion:'add', text:'3'},
      {ancho:'1', accion:'add', text:'4'},
      {ancho:'1', accion:'add', text:'5'},
      {ancho:'1', accion:'add', text:'6'},
      {ancho:'1', accion:'add', text:'7'},
      {ancho:'1', accion:'add', text:'8'},
      {ancho:'1', accion:'add', text:'9'},
      {ancho:'1', accion:'add', text:'0'},
    ],
    [
      {ancho:'1', accion:'add', text:'q'},
      {ancho:'1', accion:'add', text:'w'},
      {ancho:'1', accion:'add', text:'e'},
      {ancho:'1', accion:'add', text:'r'},
      {ancho:'1', accion:'add', text:'t'},
      {ancho:'1', accion:'add', text:'y'},
      {ancho:'1', accion:'add', text:'u'},
      {ancho:'1', accion:'add', text:'i'},
      {ancho:'1', accion:'add', text:'o'},
      {ancho:'1', accion:'add', text:'p'},
    ],
    [
      {ancho:'1', accion:'add', text:'a'},
      {ancho:'1', accion:'add', text:'s'},
      {ancho:'1', accion:'add', text:'d'},
      {ancho:'1', accion:'add', text:'f'},
      {ancho:'1', accion:'add', text:'g'},
      {ancho:'1', accion:'add', text:'h'},
      {ancho:'1', accion:'add', text:'j'},
      {ancho:'1', accion:'add', text:'k'},
      {ancho:'1', accion:'add', text:'l'},
      {ancho:'1', accion:'add', text:'ñ'},
    ],
    [
      {ancho:'1', accion:'add', text:'z'},
      {ancho:'1', accion:'add', text:'x'},
      {ancho:'1', accion:'add', text:'c'},
      {ancho:'1', accion:'add', text:'v'},
      {ancho:'1', accion:'add', text:'b'},
      {ancho:'1', accion:'add', text:'n'},
      {ancho:'1', accion:'add', text:'m'},
      {ancho:'1', accion:'add', text:','},
      {ancho:'1', accion:'add', text:'.'},
      {ancho:'1', accion:'add', text:'-'},

    ],
    [
      {ancho:'7', accion:'space', text:''},
      {ancho:'1', accion:'add', text:'@'},
      {ancho:'1', accion:'add', text:'?'},
      {ancho:'1', accion:'add', text:'¿'}
    ],
    [{ancho:'3', accion:'enter', text:'Aceptar'},{ancho:'3', accion:'suprimir', text:'Eliminar'},{ancho:'3', accion:'upper', text:'UP'},{ancho:'1', accion:'delete', text:'<'}]

  ];
  alpha = [
    [
      {ancho:'1', accion:'add', text:'1'},
      {ancho:'1', accion:'add', text:'2'},
      {ancho:'1', accion:'add', text:'3'},
      {ancho:'1', accion:'add', text:'4'},
      {ancho:'1', accion:'add', text:'5'},
      {ancho:'1', accion:'add', text:'6'},
      {ancho:'1', accion:'add', text:'7'},
      {ancho:'1', accion:'add', text:'8'},
      {ancho:'1', accion:'add', text:'9'},
      {ancho:'1', accion:'add', text:'0'},
    ],
    [
      {ancho:'1', accion:'add', text:'q'},
      {ancho:'1', accion:'add', text:'w'},
      {ancho:'1', accion:'add', text:'e'},
      {ancho:'1', accion:'add', text:'r'},
      {ancho:'1', accion:'add', text:'t'},
      {ancho:'1', accion:'add', text:'y'},
      {ancho:'1', accion:'add', text:'u'},
      {ancho:'1', accion:'add', text:'i'},
      {ancho:'1', accion:'add', text:'o'},
      {ancho:'1', accion:'add', text:'p'},
    ],
    [
      {ancho:'1', accion:'add', text:'a'},
      {ancho:'1', accion:'add', text:'s'},
      {ancho:'1', accion:'add', text:'d'},
      {ancho:'1', accion:'add', text:'f'},
      {ancho:'1', accion:'add', text:'g'},
      {ancho:'1', accion:'add', text:'h'},
      {ancho:'1', accion:'add', text:'j'},
      {ancho:'1', accion:'add', text:'k'},
      {ancho:'1', accion:'add', text:'l'},
      {ancho:'1', accion:'add', text:'ñ'},
    ],
    [
      {ancho:'1', accion:'add', text:'z'},
      {ancho:'1', accion:'add', text:'x'},
      {ancho:'1', accion:'add', text:'c'},
      {ancho:'1', accion:'add', text:'v'},
      {ancho:'1', accion:'add', text:'b'},
      {ancho:'1', accion:'add', text:'n'},
      {ancho:'1', accion:'add', text:'m'},
      {ancho:'1', accion:'add', text:','},
      {ancho:'1', accion:'add', text:'.'},
      {ancho:'1', accion:'add', text:'-'},
    ],
    [{ancho:'3', accion:'enter', text:'Aceptar'},{ancho:'3', accion:'suprimir', text:'Eliminar'},{ancho:'3', accion:'upper', text:'UP'},{ancho:'1', accion:'delete', text:'<'}]
  ];
  alphaNumericoM = [
    [
      {ancho:'1', accion:'add', text:'!'},
      {ancho:'1', accion:'add', text:'¡'},
      {ancho:'1', accion:'add', text:'#'},
      {ancho:'1', accion:'add', text:'$'},
      {ancho:'1', accion:'add', text:'%'},
      {ancho:'1', accion:'add', text:'&'},
      {ancho:'1', accion:'add', text:'/'},
      {ancho:'1', accion:'add', text:'('},
      {ancho:'1', accion:'add', text:')'},
      {ancho:'1', accion:'add', text:'='},
    ],
    [
      {ancho:'1', accion:'add', text:'Q'},
      {ancho:'1', accion:'add', text:'W'},
      {ancho:'1', accion:'add', text:'E'},
      {ancho:'1', accion:'add', text:'R'},
      {ancho:'1', accion:'add', text:'T'},
      {ancho:'1', accion:'add', text:'Y'},
      {ancho:'1', accion:'add', text:'U'},
      {ancho:'1', accion:'add', text:'I'},
      {ancho:'1', accion:'add', text:'O'},
      {ancho:'1', accion:'add', text:'P'},
    ],
    [
      {ancho:'1', accion:'add', text:'A'},
      {ancho:'1', accion:'add', text:'S'},
      {ancho:'1', accion:'add', text:'D'},
      {ancho:'1', accion:'add', text:'F'},
      {ancho:'1', accion:'add', text:'G'},
      {ancho:'1', accion:'add', text:'H'},
      {ancho:'1', accion:'add', text:'J'},
      {ancho:'1', accion:'add', text:'K'},
      {ancho:'1', accion:'add', text:'L'},
      {ancho:'1', accion:'add', text:'Ñ'},
    ],
    [
      {ancho:'1', accion:'add', text:'Z'},
      {ancho:'1', accion:'add', text:'X'},
      {ancho:'1', accion:'add', text:'C'},
      {ancho:'1', accion:'add', text:'V'},
      {ancho:'1', accion:'add', text:'B'},
      {ancho:'1', accion:'add', text:'N'},
      {ancho:'1', accion:'add', text:'M'},
      {ancho:'1', accion:'add', text:';'},
      {ancho:'1', accion:'add', text:':'},
      {ancho:'1', accion:'add', text:'_'},
    ],
    [
      {ancho:'7', accion:'space', text:''},
      {ancho:'1', accion:'add', text:'@'},
      {ancho:'1', accion:'add', text:'?'},
      {ancho:'1', accion:'add', text:'¿'}
    ],
    [
      {ancho:'3', accion:'enter', text:'Aceptar'},{ancho:'3', accion:'suprimir', text:'Eliminar'},{ancho:'3', accion:'low', text:'LOW'},{ancho:'1', accion:'delete', text:'<'}
    ]
  ];

  constructor(
    private modalService: ModalTecladoService,
    private emitTecladoService: EmitDataService,
  ) { }

  ngOnInit() {
    this.subscripcion = this.emitTecladoService.model.subscribe(data => {
      this.model = data.input;
      this.texto = data.texto;
      this.desde = this.texto.length;
      switch(data.teclado){
        case 'numerico':
          this.teclas = this.numerico;
        break;
        case 'rut':
          this.teclas = this.rut;
        break;
        case 'alphaNumerico':
          this.teclas = this.alphaNumerico;
        break;
        case 'alpha':
          this.teclas = this.alpha;
        break;
      }
    });
  }

  ngOnDestroy(){
    this.subscripcion.unsubscribe();
  }

  setNgModel(accion, texto){
    switch(accion){
      case 'add':
        let inicio = this.texto.substring(0, this.desde);
        let fin = this.texto.substring(this.desde, this.texto.length);
        this.texto = inicio + texto + fin;
        break;
      case 'enter':
        this.modalService.closeModal();
        break;
      case 'delete':
        this.texto = this.texto.substring(0, this.texto.length - 1);
        break;
      case 'suprimir':
        this.texto = '';
        break;
      case 'upper':
        this.teclas = this.alphaNumericoM;
        break;
      case 'low':
        this.teclas = this.alphaNumerico;
        break;
      case 'space':
        this.texto = this.texto + ' ';
    }
    this.desde = (this.texto.length === this.desde + 1)? this.texto.length : this.desde;
    this.emitTecladoService.enviarDataInput({ input: this.model, texto: this.texto});
  }
  foco(event){
    this.desde = event.target.selectionStart;
  }
}
