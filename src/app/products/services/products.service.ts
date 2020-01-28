import { Injectable } from '@angular/core';
import { products, Product } from '../../../data/products';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor() { }

  getProducts(): Product[] {
    return products;
  }

  getProductById(id: number): Product | undefined {
    return products.find(product => product.id === +id);
  }

  addToBasket() {
    // implementation of adding
  }

  removeFromBasket(id: string) {
    // implementation of removing
  }

}
