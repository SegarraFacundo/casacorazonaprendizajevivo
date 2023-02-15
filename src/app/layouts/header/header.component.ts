import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MenuService } from 'src/app/services/menu.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent {

  constructor(
    private router: Router,
    public menuService: MenuService
  ) { }

  cerrarMenu(): void {
    if (this.menuService.verMenuLateral)
      this.menuService.verMenuLateral = false;
  }

  irA(ruta: string): void {
    this.menuService.verMenuLateral = false;
    this.router.navigate([ ruta ])
 }
}
