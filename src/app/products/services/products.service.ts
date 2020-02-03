import { Injectable } from '@angular/core';
import { products, Product } from '../../../data/products';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  private products: Product[] = products;
  getProducts(): Product[] {
    return this.products;
  }
}
