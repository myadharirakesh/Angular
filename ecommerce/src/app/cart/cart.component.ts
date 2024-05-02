import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from '../services/cart.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent {
  constructor(private cart : CartService,private router:Router){}
  cartitems:any;
  totalprice:any;
  cartlength:any;
  ngDoCheck(){
    this.cartlength=this.cart.getLength();
    this.totalprice=this.cart.getTotal();
  }
 ngOnInit(){
  this.cart.getItems().subscribe((result)=>{
    this.cartitems=result;
    console.log(this.cartitems);
  });
 }
onBuyNow(){
  Swal.fire({
    title:"success",
    text:"Product successfully added",
    icon:"success"
  });
}

delete(c:any){
this.cart.deleteItemFromCart(c)
}
}
