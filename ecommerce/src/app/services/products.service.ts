import { Injectable } from '@angular/core';
import { products } from './products';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor() { }
  productList : products[]=[
    {
      productId:'A121',
      productName:'cloths',
      productPrice:1000,
      productOffer:'up to 35% off',
      productImage:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDnYpDzc5j8RHaR1EbFIw9mY4ztMW2-NbtY8Ouya-ZZg&s',
    },
    {
      productId:'A122',
      productName:'cloths',
      productPrice:1000,
      productOffer:'up to 45% off',
      productImage:'https://m.media-amazon.com/images/I/51GpMrvje7L._SX679_.jpg',
    },
    {
      productId:'A123',
      productName:'cloths',
      productPrice:1000,
      productOffer:'up to 21% off',
      productImage:'https://m.media-amazon.com/images/I/71bXTh22crL._AC_UL480_FMwebp_QL65_.jpg',
    },
    {
      productId:'A124',
      productName:'cloths',
      productPrice:1000,
      productOffer:'up to 25% off',
      productImage:'https://m.media-amazon.com/images/I/91d0+QRG5bL._SX679_.jpg',
    },
    {
      productId:'A125',
      productName:'cloths',
      productPrice:1000,
      productOffer:'up to 31% off',
      productImage:'https://m.media-amazon.com/images/I/61DDKxHk7SL._SX679_.jpg',
    },
    {
      productId:'A121',
      productName:'shoes',
      productPrice:1000,
      productOffer:'up to 35% off',
      productImage:'https://m.media-amazon.com/images/I/61Z9LJIYepL._SY695_.jpg',
    },
    {
      productId:'A122',
      productName:'shoes',
      productPrice:1000,
      productOffer:'up to 45% off',
      productImage:'https://m.media-amazon.com/images/I/61pBTn04eKL._SY695_.jpg',
    },
    {
      productId:'A123',
      productName:'shoes',
      productPrice:1000,
      productOffer:'up to 21% off',
      productImage:'https://m.media-amazon.com/images/I/51GOpp8rAJL._SY695_.jpg',
    },
    {
      productId:'A125',
      productName:'shoes',
      productPrice:1000,
      productOffer:'up to 25% off',
      productImage:'https://m.media-amazon.com/images/I/610fN3RyKFL._AC_UL480_FMwebp_QL65_.jpg',
    },
    {
      productId:'A126',
      productName:'shoes',
      productPrice:1000,
      productOffer:'up to 31% off',
      productImage:'https://m.media-amazon.com/images/I/61LctS6qp7L._SY695_.jpg',
    },
    {
      productId:'A121',
      productName:'books',
      productPrice:1000,
      productOffer:'up to 35% off',
      productImage:'https://m.media-amazon.com/images/I/61B84NiWabL._SY466_.jpg',
    },
    {
      productId:'A122',
      productName:'books',
      productPrice:1000,
      productOffer:'up to 45% off',
      productImage:'https://m.media-amazon.com/images/I/41CIJrtCEFL._SY445_SX342_.jpg',
    },
    {
      productId:'A123',
      productName:'books',
      productPrice:1000,
      productOffer:'up to 21% off',
      productImage:'https://m.media-amazon.com/images/I/413tVFk--xS._SY445_SX342_.jpg',
    },
    {
      productId:'A125',
      productName:'books',
      productPrice:1000,
      productOffer:'up to 25% off',
      productImage:'https://m.media-amazon.com/images/I/41mxvU9Tu6L._SY445_SX342_.jpg',
    },
    {
      productId:'A126',
      productName:'books',
      productPrice:1000,
      productOffer:'up to 31% off',
      productImage:'https://m.media-amazon.com/images/I/41LusXcRdDL._SY445_SX342_.jpg',
    },



  ]
  getProducts(){
    return of(this.productList);
  }
  addProducts(product:products){
  this.productList.push(product);
  }
}
    