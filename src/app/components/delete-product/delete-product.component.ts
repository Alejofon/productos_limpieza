import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Producto } from 'src/app/interfaces/product.interface';
import { FireService } from 'src/app/services/fire.service';

@Component({
  selector: 'app-delete-product',
  templateUrl: './delete-product.component.html',
  styleUrls: ['./delete-product.component.css']
})
export class DeleteProductComponent {
  productos = this.fire.getAll()
  idDelete?: string = ''

  constructor(private fire: FireService, private toastr: ToastrService) { }

  delete(producto: Producto) {
    this.idDelete = producto.id
    console.log(this.idDelete)
  }

  DeleteProduct(){
    this.fire.delete(this.idDelete).then(()=>{
      this.toastr.warning('Se elimino el producto', 'Exito!',{
        positionClass: 'toast-top-left'
      })
    })
  }




}

