import { Component } from '@angular/core';
import { ProductsService } from '../services/products.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-addproducts',
  templateUrl: './addproducts.component.html',
  styleUrl: './addproducts.component.css'
})
export class AddproductsComponent {
newproduct:any;
productName:any;
productCompany:any;
productPrice:any;
productImage:any;
productType:any;
constructor(private serv:ProductsService,private route:Router){}
addproducts(){
  this.newproduct={
    productName:this.productName,
    productCompany:this.productCompany,
    productPrice:this.productPrice,
    productImage:this.productImage,
    productType:this.productType
  }
  this.serv.addnewproduct(this.newproduct);
  this.route.navigateByUrl('/nav/products')
}

}
