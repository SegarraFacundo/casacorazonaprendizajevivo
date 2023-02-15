import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { RouterModule } from '@angular/router';
import { ClickOutsideDirective } from './directives/click-outside.directive';
import { DeslizamientoTactilDirective } from './directives/deslizamiento-tactil.directive';



@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    ClickOutsideDirective,
    DeslizamientoTactilDirective
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    ClickOutsideDirective,
    DeslizamientoTactilDirective
  ]
})
export class LayoutsModule { }
