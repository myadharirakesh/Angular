import { Component } from '@angular/core';
import { ProductsService } from '../services/products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent {
  products:any;
  constructor(private pro:ProductsService){}
  ngOnInit(){
    this.pro.getProducts().subscribe((res)=>{
      this.products=res;
    })
  }

  

}
