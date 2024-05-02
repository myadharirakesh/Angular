import { Injectable } from '@angular/core';
import { product } from './product';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor() { }
  productList : product[]=[
    {
      productId:'A121',
      productName:'mobile',
      productCompany:'OPPO',
      productPrice:44000,
      productDescription:' Experience premium design and cutting-edge technology with OPPO Find X series smartphones, known for their sleek aesthetics, innovative camera setups, and powerful performance.',
      productImage:'https://www.reliancedigital.in/medias/OPPO-Mobile-Phone-493838339-i-1-1200Wx1200H-300Wx300H?context=bWFzdGVyfGltYWdlc3w1OTI3NXxpbWFnZS9qcGVnfGltYWdlcy9oZWMvaDFlLzEwMDE4Njk4MTY2MzAyLmpwZ3w5OGJjODMxMDE1MjM0OTE5MDU3MWI5MGE1MTcwMzQzZWViZjQzZTgwM2NmNmYyNGRiNDZhZDdjNzg1ZWYyYzkw',
      productEdit:false
    },
    {
      productId:'A122',
      productName:'mobile',
      productCompany:'REDMI',
      productPrice:13000,
      productDescription:'Explore powerful performance and impressive features with Redmi Note series smartphones, known for their large displays, long battery life, and affordable pricing.',
      productImage:'https://i03.appmifile.com/98_item_in/04/01/2024/1fcfdf47573677eee94bab44e38b7734.jpg',
      productEdit:false
    },
    {
      productId:'A123',
      productName:'mobile',
      productCompany:'VIVO',
      productPrice:32000,
      productDescription:' Experience cutting-edge technology and stylish design with Vivo V series smartphones, known for their innovative camera features, vibrant displays, and sleek aesthetics.',
      productImage:'https://5.imimg.com/data5/SELLER/Default/2023/3/296178269/PQ/YW/MM/186724856/vivo-mobile-phone.jpg',
      productEdit:false
    },
    {
      productId:'A124',
      productName:'mobile',
      productCompany:'ONEPLUS',
      productPrice:37000,
      productDescription:'Experience flagship-level performance and innovative features with OnePlus smartphones, known for their smooth OxygenOS interface, fast charging capabilities, and premium design.',
      productImage:'https://m.media-amazon.com/images/I/417odtnpERL._SY300_SX300_.jpg',
      productEdit:false
    },
    {
      productId:'A125',
      productName:'mobile',
      productCompany:'APPLE',
      productPrice:121000,
      productDescription:'Explore the iconic iPhone series from Apple, known for its premium build quality, cutting-edge technology, and seamless integration with the iOS ecosystem.',
      productImage:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXIiWENsMLQgxSBJ_pvnt-2uZjBc4JVrgrDUCMTKBdSA&s',
      productEdit:false
    },
    {
      productId:'A126',
      productName:'laptop',
      productCompany:'Apple',
      productPrice:121000,
      productDescription:'Experience unmatched performance and stunning Retina displays with the MacBook Pro, equipped with powerful processors, advanced graphics, and the innovative Touch Bar for enhanced productivity.',
      productImage:'https://www.apple.com/newsroom/images/product/mac/standard/Apple_16-inch-MacBook-Pro_111319_big.jpg.large.jpg',
      productEdit:false
    },
    {
      productId:'A127',
      productName:'laptop',
      productCompany:'Samsung',
      productPrice:80000,
      productDescription:'Discover productivity and versatility with Samsung Galaxy Book laptops, featuring sleek designs, powerful processors, and vibrant displays for work and entertainment.',
      productImage:'https://images.jdmagicbox.com/quickquotes/images_main/samsung-laptops-18-05-2022-006-271515077-wj68a0kz.png',
      productEdit:false
    },
    {
      productId:'A128',
      productName:'laptop',
      productCompany:'HP',
      productPrice:51000,
      productDescription:'Experience premium craftsmanship and high-performance computing with HP Spectre laptops, featuring sleek designs, powerful processors, and stunning displays for productivity and entertainment.',
      productImage:'https://m.media-amazon.com/images/I/718VTQB6pxL._AC_UF1000,1000_QL80_.jpg',
      productEdit:false
    },
    {
      productId:'A129',
      productName:'laptop',
      productCompany:'Dell',
      productPrice:75000,
      productDescription:'Experience exceptional performance and stunning visuals with Dell XPS laptops, known for their premium build quality, high-resolution displays, and powerful hardware configurations.',
      productImage:'https://images-cdn.ubuy.co.in/651d646f5246af3e611f9458-dell-inspiron-3000-laptop-15-6-non-touch.jpg',
      productEdit:false
    },
    {
      productId:'A130',
      productName:'laptop',
      productCompany:'Acer',
      productPrice:35000,
      productDescription:'Experience reliable performance and affordable computing with Acer Aspire laptops, featuring a range of configurations, long battery life, and user-friendly designs for everyday use.',
      productImage:'https://m.media-amazon.com/images/I/41azBTqKhKL._SY300_SX300_.jpg',
      productEdit:false
    },
    {
      productId:'A131',
      productName:'Tv',
      productCompany:'SONY',
      productPrice:41000,
      productDescription:'Sony PlayStation: Dive into the world of gaming with Sony PlayStation consoles, offering cutting-edge graphics, immersive gameplay',
      productImage:'https://m.media-amazon.com/images/I/81sFUK4Sv0L.jpg',
      productEdit:false
    },
    {
      productId:'A132',
      productName:'Tv',
      productCompany:'PANASONIC',
      productPrice:22000,
      productDescription:'Immerse yourself in stunning visuals and crisp sound with Panasonic range of televisions, known for their high-quality display panels, smart features, and immersive audio technologies.',
      productImage:'https://rukminim2.flixcart.com/image/850/1000/j7qi9ow0/television/b/j/6/panasonic-th-24e201dx-original-imaexwqkgzrfhpdf.jpeg?q=90&crop=false',
      productEdit:false
    },
    {
      productId:'A133',
      productName:'Tv',
      productCompany:'ONEPLUS',
      productPrice:80000,
      productDescription:' Experience flagship-level performance and innovative features with OnePlus smartphones, known for their smooth OxygenOS interface',
      productImage:'https://i.gadgets360cdn.com/large/oneplus_tv_u_series_55u1_review_our_planet_1_1593687257082.jpg',
      productEdit:false
    },
    {
      productId:'A134',
      productName:'Tv',
      productCompany:'SAMSUNG',
      productPrice:31000,
      productDescription:' Elevate your viewing experience with Samsung QLED TVs, offering brilliant colors, impressive brightness',
      productImage:'https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1697624774/Croma%20Assets/Entertainment/Television/Images/251190_0_esdvdk.png?tr=w-640',
      productEdit:false
    },
    {
      productId:'A135',
      productName:'Tv',
      productCompany:'LG',
      productPrice:52000,
      productDescription:'Experience stunning picture quality with deep blacks and vibrant colors on LG  OLED televisions, known for their exceptional contrast and clarity.',
      productImage:'https://www.lg.com/content/dam/channel/wcms/in/images/tvs/55uq8040psb_atr_eail_in_c/55UQ8040PSB-450.jpg',
      productEdit:false
    }
  ]

  getProducts(){
    return of (this.productList);
  }
  addProducts(product:product){
    this.productList.push(product)
  }
  delete(prod:product){
   let res=this.productList.findIndex(p=>p.productId==prod.productId);
   this.productList.splice(res,1);
  }
  updateProduct(prod:product){
    let res = this.productList.findIndex(p=>p.productId==prod.productId);
    this.productList.splice(res,1,prod);
  }
}
