import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { LayoutsModule } from './layouts/layouts.module';
import { InicioComponent } from './pages/inicio/inicio.component';
import { ContactoComponent } from './pages/contacto/contacto.component';
import { PropuestasComponent } from './pages/propuestas/propuestas.component';
import { DetalleDosComponent } from './pages/detalle-dos/detalle-dos.component';
import { DetalleUnoComponent } from './pages/detalle-uno/detalle-uno.component';
import { DetalleTresComponent } from './pages/detalle-tres/detalle-tres.component';
import { ReactiveFormsModule } from '@angular/forms';
import { EmailService } from './services/email.service';
import { HttpClientModule } from '@angular/common/http';
import { DonarComponent } from './pages/donar/donar.component';

@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    ContactoComponent,
    PropuestasComponent,
    DetalleDosComponent,
    DetalleUnoComponent,
    DetalleTresComponent,
    DonarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: !isDevMode(),
      // Register the ServiceWorker as soon as the application is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerWhenStable:30000'
    }),
    LayoutsModule
  ],
  providers: [
    EmailService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
