import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ModalModule } from 'ngx-bootstrap/modal';
import { ToastrModule  } from 'ngx-toastr';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { UserIdleModule } from 'angular-user-idle';
import { HttpClientModule } from '@angular/common/http';
import { MatButtonModule } from '@angular/material/button';
import { WebcamModule } from 'ngx-webcam';
import { PdfViewerModule } from 'ng2-pdf-viewer';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { KeyboardComponent } from './custom/keyboard/keyboard.component';
import { PageHomeComponent } from './modules/page-home/page-home.component';
import { PageMenuComponent } from './modules/page-menu/page-menu.component';
import { ModalComponent } from './modules/shared/components/modal/modal.component';
import { PdfViewerComponent } from './modules/shared/components/pdf-viewer/pdf-viewer.component';
import { SharedModule } from './modules/shared/shared.module';
import { WebsocketService } from './core/services/websocket/websocket.service';
import { MocService } from './core/services/http/moc/moc.service';


@NgModule({
  declarations: [
    AppComponent,
    KeyboardComponent,
    PageHomeComponent,
    PageMenuComponent,
    ModalComponent,
    PdfViewerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot({
      progressBar: true
    }),
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatButtonModule,
    ModalModule.forRoot(),
    UserIdleModule.forRoot({ idle: 60, timeout: 60 }),
    SharedModule,
    WebcamModule,
    PdfViewerModule
  ],
  entryComponents: [
    ModalComponent,
    KeyboardComponent,
    PdfViewerComponent
  ],
  providers: [
    WebsocketService, MocService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
