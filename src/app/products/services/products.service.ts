import { Injectable } from '@angular/core';
import { products, Product } from '../../../data/products';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  private products: Product[] = products;
  private channel = new Subject<Product[]>();

  public channel$ = this.channel.asObservable();

  getProducts(): Product[] {
    return this.products;
  }

  buyProduct(product: Product, amount: number = 1): void {
    const newProducts = this.products.map(prod => {
      if (prod.id === product.id) {
        if (prod.stockCount === 0) { console.log(`Product with ${prod.id} isn't available`); }
        return {
          ...prod,
          stockCount: this.decreaseStockCount(prod.stockCount, amount)
        };
      }
      return prod;
    });
    this.refreshCartProducts(newProducts);
  }

  returnProduct(product: Product, amount: number = 1): void {
    const newProducts = this.products.map(prod => {
      return prod.id === product.id ?
        { ...prod, stockCount: this.increaseStockCount(prod.stockCount, amount) }
        : prod;
    });
    this.refreshCartProducts(newProducts);
  }

  changeAmount(product: Product, amount: number) {
    const newProducts = this.products.map(prod => {
      console.log(prod.stockCount);
      console.log(amount);
      return prod.id === product.id ?
        { ...prod, stockCount: this.increaseStockCount(prod.stockCount, amount) }
        : prod;
    });
    this.refreshCartProducts(newProducts);
  }

  private decreaseStockCount(currentStockCount, amount) {
    return currentStockCount !== 0 ? currentStockCount - amount : 0;
  }

  private increaseStockCount(currentStockCount, amount) {
    return currentStockCount + amount;
  }

  private refreshCartProducts(newProducts: Product[]) {
    this.products = newProducts;
    this.channel.next(this.products);
  }

}
