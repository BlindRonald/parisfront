import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { PageHomeComponent } from './modules/page-home/page-home.component';
import { PageMenuComponent } from './modules/page-menu/page-menu.component';


const routes: Routes = [
  { 
    path: '', component: PageHomeComponent 
  },
  {
    path: '',
    loadChildren: () => import('./modules/login/login.module').then(m => m.LoginModule)
  },
  {
    path: 'cedula',
    loadChildren: () => import('./modules/cedula/cedula.module').then(m => m.CedulaModule)
  },
  {
    path: 'seguimiento',
    loadChildren: () => import('./modules/seguimiento/seguimiento.module').then(m => m.SeguimientoModule)
  },
  { 
    path: 'menu', component: PageMenuComponent 
  },
  { 
    path: '**', redirectTo: '' 
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    preloadingStrategy: PreloadAllModules
  })],

  exports: [RouterModule]
})
export class AppRoutingModule { }
