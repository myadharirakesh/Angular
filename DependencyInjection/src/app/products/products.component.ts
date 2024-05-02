import { Component } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent {

  mobiles=[
    {
      mobileName:"Samsung",
      mobileCompany:"Samsung123",
      mobilePrice:41000,
      mobileImage:"https://images.samsung.com/is/image/samsung/p6pim/in/sm-a042flbkins/gallery/in-galaxy-a04e-sm-a042-443263-sm-a042flbkins-534541846?$650_519_PNG$"
    }
  ];
  mobiles1 = [
    {
      mobileName: "Oneplus",
      mobileCompany: "Oneplus123",
      mobilePrice: 90000,
      mobileImage: "https://www.jiomart.com/images/product/original/493665925/oneplus-nord-ce-3-lite-5g-256-gb-8-gb-ram-pastel-lime-mobile-phone-digital-o493665925-p600340967-0-202304101447.jpeg?im=Resize=(420,420)"
    }
  ];
  mobiles2 = [
    {
      mobileName: "Redmi",
      mobileCompany: "Redmi123",
      mobilePrice: 12000,
      mobileImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOhqsy2FGxaxM5RwSLkkjjGwcE4VMxjrmnv74LXmHMqg&s"
    }
  ];
  mobiles3 = [
    {
      mobileName: "Galaxy",
      mobileCompany: "Galaxy123",
      mobilePrice: 30000,
      mobileImage: "https://www.reliancedigital.in/medias/Samsung-A23-5G-Mobile-Phone-493664931-i-1-1200Wx1200H-300Wx300H?context=bWFzdGVyfGltYWdlc3wzNTM1MXxpbWFnZS9qcGVnfGltYWdlcy9oYjMvaDg3Lzk5NTE1OTcwMzU1NTAuanBnfDQ2ZGU4ZWJjODI4ZWRmNDRhNWQyNDZiNTY0YzFmMmEzZjBiYmE1OWFkZmRlODVhOTE3Nzk3Mjk5MDNmMjcxMTU"
    }
  ];
  
}
