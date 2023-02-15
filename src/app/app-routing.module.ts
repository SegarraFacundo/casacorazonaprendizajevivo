import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactoComponent } from './pages/contacto/contacto.component';
import { DetalleDosComponent } from './pages/detalle-dos/detalle-dos.component';
import { DetalleTresComponent } from './pages/detalle-tres/detalle-tres.component';
import { DetalleUnoComponent } from './pages/detalle-uno/detalle-uno.component';
import { DonarComponent } from './pages/donar/donar.component';
import { InicioComponent } from './pages/inicio/inicio.component';
import { PropuestasComponent } from './pages/propuestas/propuestas.component';

const routes: Routes = [
  {
    path: '',
    component: InicioComponent
  },
  {
    path: 'propuestas',
    component: PropuestasComponent
  },
  {
    path: 'detalle-1',
    component: DetalleUnoComponent
  },
  {
    path: 'detalle-2',
    component: DetalleDosComponent
  },
  {
    path: 'detalle-3',
    component: DetalleTresComponent
  },
  {
    path: 'contacto',
    component: ContactoComponent
  },
  {
    path: 'donar',
    component: DonarComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    scrollPositionRestoration: 'enabled',
    anchorScrolling: 'enabled'
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
