import { Component, HostListener, inject } from '@angular/core';
import { Firestore, collection, collectionData } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  isNavbarDark: boolean = false;

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.isNavbarDark = window.scrollY > 30; // Cambiar a oscuro cuando se hace scroll
  }


}
