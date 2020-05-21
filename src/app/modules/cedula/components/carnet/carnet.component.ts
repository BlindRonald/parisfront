import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-carnet',
  templateUrl: './carnet.component.html',
  styleUrls: ['./carnet.component.css']
})
export class CarnetComponent implements OnInit {
  @Output() changeStep: EventEmitter<any> = new EventEmitter();

  constructor() {
    
  }

  ngOnInit() {
  }

  avanzar(paso) {
    this.changeStep.emit(paso);
  }

}
