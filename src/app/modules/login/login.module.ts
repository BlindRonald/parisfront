import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginRoutingModule } from './login-routing.module';

import { LoginComponent } from '../login/components/login/login.component';
// import { RegisterComponent } from '../login/components/register/register.component';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';
// import { MatKeyboardModule } from '@ngx-material-keyboard/core';
// import { Ng2Rut } from 'ng2-rut';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    CommonModule,
    LoginRoutingModule,
    LoginRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    // MatKeyboardModule,
    // Ng2Rut,
    SharedModule

  ]
})
export class LoginModule { }
