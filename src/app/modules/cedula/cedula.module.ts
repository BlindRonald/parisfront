import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CedulaRoutingModule } from './cedula-routing.module';
import { PageCedulaComponent } from './pages/page-cedula/page-cedula.component';

import { SharedModule } from '../shared/shared.module';
import { HuellaComponent } from './components/huella/huella.component';
import { CarnetComponent } from './components/carnet/carnet.component';

@NgModule({
  declarations: [PageCedulaComponent, HuellaComponent, CarnetComponent],
  imports: [
    SharedModule,
    CommonModule,
    CedulaRoutingModule
  ]
})
export class CedulaModule { }
