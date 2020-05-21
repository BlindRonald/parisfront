import { Injectable, Output, EventEmitter  } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmitDataService {
  @Output() model: EventEmitter<any> = new EventEmitter();
  @Output() dataInput: EventEmitter<any> = new EventEmitter();

  constructor() { }

  enviarModel(model) {
    this.model.emit(model);
  }
  enviarDataInput(dataInput) {
    this.dataInput.emit(dataInput);
  }
}
