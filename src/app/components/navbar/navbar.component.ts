import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  isNavbarDark: boolean = false;

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.isNavbarDark = window.scrollY > 30; // Cambiar a oscuro cuando se hace scroll
  }
}
