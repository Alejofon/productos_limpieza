import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { AdministrateComponent } from './components/administrate/administrate.component';
import { HomeComponent } from './components/home/home.component';
import {canActivate, redirectUnauthorizedTo} from '@angular/fire/auth-guard'
import { ProductsComponent } from './components/products/products.component';
import { ContactComponent } from './components/contact/contact.component';
import { ProductDetailComponent } from './components/product-detail/product-detail.component';

const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo:'inicio'},
  {path: 'inicio', component: HomeComponent},
  {path: 'login', component: LoginComponent},
  {path: 'administracion', component: AdministrateComponent,...canActivate(()=>redirectUnauthorizedTo(['login']))},
  {path: 'productos', component:ProductsComponent},
  {path: 'contacto', component:ContactComponent},
  {path: 'producto', component:ProductDetailComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
