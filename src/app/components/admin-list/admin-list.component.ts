import { Component,OnInit, inject} from '@angular/core';
import { Firestore, collection, collectionData } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

// card-list.component.ts

@Component({
  selector: 'app-admin-list',
  templateUrl: './admin-list.component.html',
  styleUrls: ['./admin-list.component.css']
})
export class AdminListComponent {
  firestore: Firestore = inject(Firestore)
  items$: Observable<any[]>;
 
  constructor() {
    const aCollection = collection(this.firestore, 'productos')
    this.items$ = collectionData(aCollection);
  }

}
