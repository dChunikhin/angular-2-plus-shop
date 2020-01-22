import { Component, OnInit } from '@angular/core';
import { Product } from '../../../../data/products';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  products: Product[];
  isEmpty: boolean;

  constructor(private cartService: CartService) { }

  ngOnInit() {
    this.products = this.cartService.getCartProducts();
    this.isEmpty = !this.products.length;
  }

  onSell(id: number): void {
    this.cartService.sellProduct(id);
    this.products = this.cartService.getCartProducts();
  }

}
