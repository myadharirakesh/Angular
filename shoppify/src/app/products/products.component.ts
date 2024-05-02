import { Component } from '@angular/core';
import { ProductService } from '../services/product.service';
import { CartService } from '../services/cart.service';
import { product } from '../services/product';
// import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent {
constructor(private service : ProductService,private cart : CartService){}
 product:any;
 ngOnInit(){
     this.service.getProducts().subscribe((result)=>{
     this.product=result;
     console.log(this.product);
   })
 }
 addtoCart(pro:product){
  this.cart.addItemtoCart(pro);
  alert("your product has been added to the card")
 }
}
