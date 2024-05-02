import { Component } from '@angular/core';
import { ProductService } from '../services/product.service';
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
    productCompany:any;
    productPrice:any;
    productDescription:any;
    productImage:any;
    newProduct:any;
    constructor(private service : ProductService,private router :Router){}
    addProducts(){
      this.newProduct={
        productId:this.productId,
        productName:this.productName,
        productCompany:this.productCompany,
        productPrice:this.productPrice,
        productDescription:this.productDescription,
        productImage:this.productImage
      }
      this.service.addProducts(this.newProduct);
      Swal.fire({
        title:"success",
        text:"Product successfully added",
        icon:"success"
      });
      this.router.navigateByUrl('/admin/manage');
    }
}
