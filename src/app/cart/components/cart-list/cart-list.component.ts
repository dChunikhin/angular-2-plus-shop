import { Component, OnInit } from '@angular/core';
import { CartService } from '../../services/cart.service';
import { ProductsService } from '../../../products/services/products.service';
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

  constructor(private cartService: CartService, private productsService: ProductsService) { }

  ngOnInit() {
    this.cartProducts = this.cartService.getCartProducts();
    this.sub = this.cartService.channel$.subscribe(data => {
      this.cartProductsTotalAmount = this.cartService.getTotalAmount(data);
      this.cartProductsTotalPrice = this.cartService.getTotalPrice(data);
      this.cartProducts = data;
    });
  }

  onRemove(product: Product): void {
    this.cartService.removeFromCart(product);
    this.productsService.returnProduct(product);
  }

  changeAmount({ product, amount }): void {
    // const cartProduct = this.cartProducts.find(prod => prod.id === product.id);
    // const inStock = cartProduct.stockCount;

    // if (amount > inStock) {
    //   this.productsService.buyProduct(product, amount - inStock);
    //   this.cartService.addToCart(product, amount - inStock);
    // } else {
    //   this.productsService.returnProduct(product, inStock - amount);
    //   this.cartService.removeFromCart(product, inStock - amount);
    // }

  }

}
