import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Input() titleHeader: string;
  @Input() imgHeader: string;
  @Input() modulo: string;
  nombreCliente: string;

  constructor() { }

  ngOnInit() {
  }

}
