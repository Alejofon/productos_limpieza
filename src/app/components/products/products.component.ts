import { Component, inject } from '@angular/core';
import { Firestore, collection, collectionData } from '@angular/fire/firestore';
import { Observable, Subscription } from 'rxjs';
import { interval } from 'rxjs';
import { map,take } from 'rxjs/operators';


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {

  firestore: Firestore = inject(Firestore);
  items$: Observable<any[]>;
  intervalSubscription: Subscription;
  itemsArray: any[] = [];
  totalItems: number; // Añadido el total de elementos

  constructor() {
    const aCollection = collection(this.firestore, 'productos');
    this.items$ = collectionData(aCollection);

    // Suscripción al Observable para almacenar los datos en el array
    this.items$.subscribe(data => {
      this.itemsArray = data;
      this.totalItems = this.itemsArray.length; // Definir el total de elementos
      this.startCarouselInterval(); // Iniciar el intervalo después de obtener los datos
    });
  }

  slickCarouselConfig = {
    infinite: true,
    slidesToShow: 2, // Muestra 3 cartas
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: '0', // Sin padding
    arrows: false, // Sin flechas de navegación
    focusOnSelect: true, // Importante para el efecto deseado
    vertical: false,
  };

  activeIndex = 1; // Índice del slider activo

  // Eliminado nextSlide() y prevSlide()

  startCarouselInterval() {
    if (this.intervalSubscription) {
      this.intervalSubscription.unsubscribe();
    }
  
    this.intervalSubscription = interval(3000).subscribe(() => {
      this.activeIndex = (this.activeIndex + 1) % this.totalItems;
    });
  }


}
