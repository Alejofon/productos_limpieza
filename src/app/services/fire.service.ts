import { Injectable } from '@angular/core';
import { CollectionReference, DocumentData, Firestore, addDoc, collection, collectionData, deleteDoc, doc, docData, getFirestore, updateDoc } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Producto } from '../interfaces/product.interface';
import { Admin } from '../interfaces/userAdmin.interface';
import { Storage, ref, uploadBytesResumable, getDownloadURL } from '@angular/fire/storage';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { Auth, signOut } from '@angular/fire/auth';


@Injectable({
  providedIn: 'root'
})


export class FireService {



  //private firestore: Firestore = inject(Firestore); // inject Cloud Firestore
  productCollection: CollectionReference<DocumentData>;


  constructor(private readonly firestore: Firestore, private storage: Storage, private auth: Auth) {
    this.productCollection = collection(this.firestore, 'productos')
  }

  getAll() {
    return collectionData(this.productCollection, {
      idField: 'id'
    }) as Observable<Producto[]>

  }

  get(id: string) {
    const productoDocumentReference = doc(this.firestore, `productos/${id}`)
    return docData(productoDocumentReference, { idField: 'id' })
  }


  addProduct(product: Producto) {

    return addDoc(this.productCollection, product)
  }

  update(producto: Producto) {
    const productDocumentReference = doc(
      this.firestore,
      `productos/${producto.id}`
    );
    return updateDoc(productDocumentReference, { ...producto });
  }

  delete(id?: string) {
    const productDocumentReference = doc(this.firestore, `productos/${id}`);
    return deleteDoc(productDocumentReference);
  }
  login(user: Admin) {
    const auth = getAuth();

    return signInWithEmailAndPassword(auth, user.email, user.password)
  }

  logout(){
    return signOut(this.auth)
  }


}

