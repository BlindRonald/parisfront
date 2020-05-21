import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxPaginationModule } from 'ngx-pagination';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';

// Pipes
import { PesoChilenoPipe } from '../../core/pipe/peso-chileno.pipe';
import { ObservacionBonoPipe } from '../../core/pipe/observacion-bono.pipe';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    PesoChilenoPipe,
    ObservacionBonoPipe,
  ],
  imports: [
    CommonModule,
    NgxPaginationModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  exports: [
    FooterComponent,
    NgxPaginationModule,
    ObservacionBonoPipe,
    PesoChilenoPipe,
    HeaderComponent,
  ]
})
export class SharedModule { }
