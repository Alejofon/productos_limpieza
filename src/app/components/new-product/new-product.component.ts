import { Component, ViewChild, ElementRef, Input, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FireService } from '../../services/fire.service'
import { Producto } from '../../interfaces/product.interface'
import { collection, getFirestore } from '@angular/fire/firestore';
import { getDownloadURL, getStorage, ref, uploadBytes } from '@angular/fire/storage';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';


@Component({
  selector: 'app-new-product',
  templateUrl: './new-product.component.html',
  styleUrls: ['./new-product.component.css']
})

export class NewProductComponent {

  createProduct: FormGroup;
  submitted = false;
  imgPaht: string;
  imgVer: boolean = false;
  imagen: HTMLInputElement;
  today = new Date();
  accion: string = 'agregar';
  productos = this.fire.getAll()
  pestanaActiva: String = 'agregar';

 
  constructor(private fb: FormBuilder, private fire: FireService, private toastr: ToastrService) {
    this.createProduct = this.fb.group({
      nameProduct: ['', Validators.required],
      descriptionProduct: ['', Validators.required],
      caracteristicas: ['', Validators.required],
      coustProduct: ['', Validators.required]
    })
  }
  onFileChange(event: any) {

    const file = event.target.files[0]

    if (file) {
      console.log(file)

      const storage = getStorage()
      const storageRef = ref(storage, `${this.today.getTime()}_${file.name}`)
      uploadBytes(storageRef, file).then(() => {
        getDownloadURL(storageRef).then((url) => {
          console.log(url)
          this.imgPaht = url
          this.imgVer = true

        }).catch((error) => console.log(error))

      }).catch((error) => console.log(error))


    }

  }

  addProduct() {
    this.submitted = true;

    if (this.createProduct.invalid) {
      return;
    }

    const product: Producto = {
      nombre: this.createProduct.value.nameProduct,
      descripcionCorta: this.createProduct.value.descriptionProduct,
      caracteristicas: this.createProduct.value.caracteristicas,
      valor: this.createProduct.value.coustProduct,
      imagen: this.imgPaht,
      createDate: new Date(),
      updateDate: new Date()
    }

    console.log(product)

    this.fire.addProduct(product).then(() => {
      console.log('Registro exitoso')
      this.toastr.success('Exito', 'Producto agregado')
    }).catch(error => {
      this.toastr.error('Error!:', error)
      console.log(error)
    })

    this.createProduct.reset();
    this.reset()

  }
  @ViewChild('imagen') myInputVariable: ElementRef;

  reset() {
    this.myInputVariable.nativeElement.value = '';
    this.imgVer = false
  }
  mostrarAgregacion() {
    this.pestanaActiva = 'agregar';
    this.accion = 'agregar';
  }

  mostrarModificacion() {
    this.pestanaActiva = 'modificar';
    this.accion = 'modificar';

  }

  mostrarEliminacion() {
    this.pestanaActiva = 'eliminar';
    this.accion = 'eliminar';
  }






}
