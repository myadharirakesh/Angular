import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { UserdashboardComponent } from './userdashboard/userdashboard.component';
import { AddproductsComponent } from './addproducts/addproducts.component';
import { HomeComponent } from './home/home.component';
import { AdmindashboardComponent } from './admindashboard/admindashboard.component';
import { ClothsComponent } from './cloths/cloths.component';
import { ShoesComponent } from './shoes/shoes.component';
import { BooksComponent } from './books/books.component';
import { ProductsComponent } from './products/products.component';
import { CartComponent } from './cart/cart.component';

const routes: Routes = [
  {path:'',component:LoginComponent},
  {path:'user',component:UserdashboardComponent,
    children:[
      {path:'home',component:HomeComponent},
      {path:'add',component:AddproductsComponent},
      {path:'cloths',component:ClothsComponent},
      {path:'shoes',component:ShoesComponent},
      {path:'book',component:BooksComponent},
      {path:'cart',component:CartComponent}
    ]
  },
  {path:'admin',component:AdmindashboardComponent,
    children:[
      {path:'home',component:HomeComponent},
      {path:'add',component:AddproductsComponent},
      {path:'products',component:ProductsComponent},
      {path:'cloths',component:ClothsComponent},
      {path:'shoes',component:ShoesComponent},
      {path:'book',component:BooksComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
