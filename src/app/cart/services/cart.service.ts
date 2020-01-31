import { Injectable } from '@angular/core';
import { Product } from '../../../data/products';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  private cartProducts: Product[] = [];
  private channel = new Subject<Product[]>();

  public channel$ = this.channel.asObservable();

  getCartProducts() {
    return this.cartProducts;
  }

  addToCart(product, amount: number = 1): void {
    const cartProduct = this.getCartProductById(product.id);

    if (cartProduct) {
      const newProducts = this.cartProducts.map(prod => {
        return prod.id === product.id ?
          { ...prod, stockCount: prod.stockCount + 1 }
          : prod;
      });
      this.refreshCartProducts(newProducts);
    } else {
      const newProduct = { ...product, stockCount: 1 };
      this.refreshCartProducts([...this.cartProducts, newProduct]);
    }

  }

  removeFromCart(product, amount: number = 1): void {
    const newCartProducts = this.cartProducts.map(prod => {
      if (prod.id === product.id) {
        return { ...prod, stockCount: prod.stockCount - 1 || 0 };
      }
      return prod;
    })
      .filter(prod => prod.stockCount);
    this.refreshCartProducts(newCartProducts);
  }

  changeAmount(product: Product, amount: number) {
    const newCartProducts = this.cartProducts.map(prod => {
      if (prod.id === product.id) {
        return { ...prod, stockCount: amount };
      }
      return prod;
    })
      .filter(prod => prod.stockCount);
    this.refreshCartProducts(newCartProducts);
  }

  getTotalAmount(products: Product[]): number {
    return products.reduce((acc, prod) => acc + prod.stockCount, 0);
  }

  getTotalPrice(products: Product[]): number {
    return products
      .map(prod => prod.price * prod.stockCount)
      .reduce((acc, price) => acc + price, 0);
  }

  private getCartProductById(id: number): Product | undefined {
    return this.cartProducts.find(product => product.id === id);
  }

  private refreshCartProducts(newProducts: Product[]) {
    this.cartProducts = newProducts;
    this.channel.next(this.cartProducts);
  }


}
