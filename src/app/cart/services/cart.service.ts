import { Injectable } from '@angular/core';
import { Product } from '../../../data/products';

let cartProducts: Product[] = [];

@Injectable({
  providedIn: 'root',
})
export class CartService {

  constructor() { }

  getCartProducts(): Product[] {
    return cartProducts;
  }

  buyProduct(product) {
    cartProducts.push(product);
    return product;
  }

  sellProduct(id) {
    cartProducts = cartProducts.filter(product => product.id !== +id);
    return this.getCartProducts();
  }
}


