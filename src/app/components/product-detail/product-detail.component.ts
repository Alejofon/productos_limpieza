import { Component } from '@angular/core';
import { FireService } from 'src/app/services/fire.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent {
  
  constructor(private fire: FireService){

  }



}
