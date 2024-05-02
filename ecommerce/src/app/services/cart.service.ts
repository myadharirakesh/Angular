import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { products } from './products';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor() { }
  
  cartitems:products[]=[];
  addItemtoCart(product :products){
    this.cartitems.push(product);
  }
  getItems(){
    return of (this.cartitems)
  }
  getLength(){
    return this.cartitems.length;
  }
  getTotal(){
    let total=0;
      for(let i=0;i<this.cartitems.length;i++)
      {
        total+=this.cartitems[i].productPrice;
      }
      return total;
  }
  deleteItemFromCart(itemIndex: number) {
    if (itemIndex >= 0 && itemIndex < this.cartitems.length) {
      this.cartitems.splice(itemIndex, 1);
    }
  }
}
