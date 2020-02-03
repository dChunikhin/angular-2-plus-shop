import { Injectable } from '@angular/core';
import { Product } from '../../../data/products';
import { Subject } from 'rxjs';

interface Cart {
  products: Product[];
  count: number;
  totalPrice: number;
}

@Injectable({
  providedIn: 'root'
})
export class CartService {

  private cartProducts: Product[] = [];
  private count = 0;
  private totalPrice = 0;
  private cartChanges = new Subject<Cart>();
  public cartChanges$ = this.cartChanges.asObservable();

  getCart(): Cart {
    return {
      products: this.cartProducts,
      count: this.count,
      totalPrice: this.totalPrice
    };
  }
  addToCart(product /* почему без типа? */, amount: number = 1): void {
    const cartProduct = this.getCartProductById(product.id);
    let products: Product[];

    if (cartProduct) {
      products = this.cartProducts.map(prod => {
        return prod.id === product.id ?
          { ...prod, stockCount: prod.stockCount + amount }
          : prod;
      });
    } else {
      products = [...this.cartProducts, { ...product, stockCount: amount }];
    }

    this.count += amount;
    this.totalPrice += product.price * amount;

    this.refreshCartProducts(products);
  }
  removeFromCart(product, amount: number = 1): void {
    const products: Product[] = this.cartProducts
      .map(prod => prod.id === product.id ? { ...prod, stockCount: prod.stockCount - amount } : prod)
      .filter(prod => prod.stockCount > 0);

    this.count -= amount;
    this.totalPrice -= product.price * amount;

    this.refreshCartProducts(products);
  }
  getCount(): number {
    return this.count;
  }
  getTotalPrice(): number {
    return this.totalPrice;
  }
  getCartProductById(id: number): Product | undefined {
    return this.cartProducts.find(product => product.id === id);
  }

  private refreshCartProducts(newProducts: Product[]) {
    this.cartProducts = newProducts;
    const changedCart: Cart = {
      products: this.cartProducts,
      count: this.getCount(),
      totalPrice: this.getTotalPrice()
    };
    this.cartChanges.next(changedCart);
  }
}
