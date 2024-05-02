import { Component } from '@angular/core';
import { ProductsService } from '../services/products.service';
import { products } from '../services/products';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-shoes',
  templateUrl: './shoes.component.html',
  styleUrl: './shoes.component.css'
})
export class ShoesComponent {
  constructor(private service:ProductsService,private cart:CartService){}
  product:any;
  ngOnInit(){
    this.service.getProducts().subscribe((result)=>{
      this.product=result;
      console.log(this.product);
    })
  }
  addtoCart(pro:products){
    this.cart.addItemtoCart(pro);
    alert("your product has been added to the card")
   }
}
