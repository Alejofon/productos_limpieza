import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { FireService } from 'src/app/services/fire.service';
import { Producto } from '../../interfaces/product.interface';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-update-product',
  templateUrl: './update-product.component.html',
  styleUrls: ['./update-product.component.css']
})
export class UpdateProductComponent {
  
  
  showMod: string = 'noShow'
  productos = this.fire.getAll()
  product: FormGroup




  constructor(private fire: FireService, private toastr: ToastrService, private fb: FormBuilder) {
    this.product = this.fb.group({
      id: [''],
      nameProduct: ['', Validators.required],
      descriptionProduct: ['', Validators.required],
      caracteristicas: ['', Validators.required],
      coustProduct: ['', Validators.required]
    })
  }


  modProduct(producto: Producto) {
    this.product.setValue({
      id: producto.id,
      nameProduct: producto.nombre,
      descriptionProduct: producto.descripcionCorta,
      caracteristicas: producto.caracteristicas,
      coustProduct: producto.valor,
    })
    console.log(this.product)
    this.mostrarModificacion()

  }

  update() {
    const producto: Producto = {

      id: this.product.value.id,
      nombre: this.product.value.nameProduct,
      descripcionCorta: this.product.value.descriptionProduct,
      caracteristicas: this.product.value.caracteristicas,
      valor: this.product.value.coustProduct,
      updateDate: new Date()
    }
    console.log(this.product)
    this.fire.update(producto).then(() => {
      this.toastr.success('Producto actualizado', 'Exito!',{
        positionClass: 'toast-top-left'
      })
      this.showMod = 'noShow'
    })
  }

  mostrarModificacion() {

    this.showMod = 'show';

  }



}
