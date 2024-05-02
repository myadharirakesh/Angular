import { Component } from '@angular/core';
import { ProductService } from '../services/product.service';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-manageproduct',
  templateUrl: './manageproduct.component.html',
  styleUrl: './manageproduct.component.css'
})
export class ManageproductComponent {
  constructor(private service : ProductService){}
 delete(p:any){
  this.service.delete(p);
  // alert("delete product successfully");
  Swal.fire({
    title:"success",
    text:"Product deleted successfully",
    icon:"success"
  });
 }
 product:any;
 ngOnInit(){
  this.service.getProducts().subscribe((res)=>{
    this.product=res;
  });
 }
 toSave(p:any){
  p.productEdit=false;
  this.service.updateProduct(p);
  alert("product updated successfully");
}
toUpdate(p:any){
  p.productEdit=true;
}
}
