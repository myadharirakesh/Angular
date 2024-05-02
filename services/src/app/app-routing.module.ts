import { NgModule } from '@angular/core';
import { Router, RouterModule, Routes } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { ProductsComponent } from './products/products.component';
import { AddproductsComponent } from './addproducts/addproducts.component';
import { LogoutComponent } from './logout/logout.component';

const routes: Routes = [
  {path:'',component:LoginComponent},
  {
    path:'nav',component:NavbarComponent,
    children :[
      {path:'home',component:HomeComponent},
  {path:'login',component:LoginComponent},
  {path:'products',component:ProductsComponent},
  {path:'addproducts',component:AddproductsComponent},
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}

