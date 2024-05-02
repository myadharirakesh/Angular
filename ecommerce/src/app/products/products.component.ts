import { Component } from '@angular/core';
import { ProductsService } from '../services/products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent {
  constructor(private service : ProductsService){}
  product:any;
  ngOnInit(){
    this.service.getProducts().subscribe((result)=>{
      this.product=result;
     console.log(this.product);
   })
   }
}
