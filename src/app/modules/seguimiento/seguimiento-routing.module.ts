import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PageSeguimientoComponent } from './pages/page-seguimiento/page-seguimiento.component';

const routes: Routes = [
  { path: '', component: PageSeguimientoComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SeguimientoRoutingModule { }
