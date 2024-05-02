import { Component } from '@angular/core';
import { ProductsService } from '../services/products.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-addproducts',
  templateUrl: './addproducts.component.html',
  styleUrl: './addproducts.component.css'
})
export class AddproductsComponent {
  productId:any;
  productName:any;
  productPrice:any;
  productOffer:any;
  productImage:any;
  newProduct:any;
  constructor(private service : ProductsService,private router :Router){}
  addProducts(){
    this.newProduct={
      productId:this.productId,
      productName:this.productName,
      productPrice:this.productPrice,
      productOffer:this.productOffer,
      productImage:this.productImage
    }
    this.service.addProducts(this.newProduct);
    Swal.fire({
      title:"success",
      text:"Product added successfully",
      icon:"success"
    })
    this.router.navigateByUrl("/admin/products");
  }
}
