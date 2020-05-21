import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SeguimientoRoutingModule } from './seguimiento-routing.module';
import { PageSeguimientoComponent } from './pages/page-seguimiento/page-seguimiento.component';

import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [PageSeguimientoComponent],
  imports: [
    SharedModule,
    CommonModule,
    SeguimientoRoutingModule
  ]
})
export class SeguimientoModule { }
