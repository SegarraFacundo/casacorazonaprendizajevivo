import { DOCUMENT } from '@angular/common';
import { Component, ElementRef, HostListener, Inject, ViewChild } from '@angular/core';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.scss']
})
export class InicioComponent {
  windowScrolled: boolean = false;

  @ViewChild('btnBackToTop') button!: ElementRef<HTMLButtonElement>;

  constructor(@Inject(DOCUMENT) private document: Document) { }
  @HostListener("window:scroll", [])
  onWindowScroll() {
    if (window.pageYOffset || document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      this.button.nativeElement.style.display = 'block';
    } else {
      this.button.nativeElement.style.display = 'none';
    }
  }

  scrollToTop() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }
}
