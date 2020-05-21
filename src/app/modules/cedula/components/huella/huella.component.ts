import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-huella',
  templateUrl: './huella.component.html',
  styleUrls: ['./huella.component.css']
})
export class HuellaComponent implements OnInit {
  @Output() changeStep: EventEmitter<any> = new EventEmitter();

  constructor(private router: Router) {

  }

  ngOnInit() {
  }

  avanzar(paso) {
    this.changeStep.emit(paso);
    this.router.navigate([paso]);
  }

}
