import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-page-seguimiento',
  templateUrl: './page-seguimiento.component.html',
  styleUrls: ['./page-seguimiento.component.css']
})
export class PageSeguimientoComponent implements OnInit, AfterViewInit {
  boleta = '';
  sku = '';
  fecha = ''

  constructor(private router: Router) {
    
  }

  ngOnInit() {
  }

  ngAfterViewInit() {
    let dato = JSON.parse(localStorage.getItem('boleta_info'));
    setTimeout(function(){

      this.boleta = dato.transaction_id;
      this.sku = dato.sku;
      this.fecha = dato.transaction_date;
      
    }, 1000);
  }

  atras() {
    this.router.navigate(['menu']);
  }

}
