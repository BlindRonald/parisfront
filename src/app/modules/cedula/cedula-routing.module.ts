import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PageCedulaComponent } from './pages/page-cedula/page-cedula.component';

const routes: Routes = [
  { path: '', component: PageCedulaComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CedulaRoutingModule { }
