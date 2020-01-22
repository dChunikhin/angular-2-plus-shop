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

}
