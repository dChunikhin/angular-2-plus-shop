import { Component, OnInit } from '@angular/core';
import { CartService } from '../../services/cart.service';
import { Product } from '../../../../data/products';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-cart-list',
  templateUrl: './cart-list.component.html',
  styleUrls: ['./cart-list.component.scss']
})
export class CartListComponent implements OnInit {
  private sub: Subscription;
  cartProducts: Product[];
  cartProductsTotalAmount = 0;
  cartProductsTotalPrice = 0;

  constructor(private cartService: CartService) { }

  ngOnInit() {
    this.cartProducts = this.cartService.getCart().products;
    this.sub = this.cartService.cartChanges$.subscribe(cart => {
      this.cartProductsTotalAmount = cart.count;
      this.cartProductsTotalPrice = cart.totalPrice;
      this.cartProducts = cart.products;
    });
  }

  onRemove(product: Product): void {
    this.cartService.removeFromCart(product, product.stockCount);
  }

  changeAmount({ product, operation }): void {
    switch (operation) {
      case 'increase':
        this.cartService.addToCart(product);
        break;
      case 'decrease':
        this.cartService.removeFromCart(product);
        break;
      default:
        break;
    }
  }
}
