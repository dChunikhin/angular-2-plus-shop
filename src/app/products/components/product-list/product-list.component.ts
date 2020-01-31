import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../services/products.service';
import { CartService } from '../../../cart/services/cart.service';
import { Product } from '../../../../data/products';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {

  private sub: Subscription;
  products: Product[];

  constructor(private productsService: ProductsService, private cartService: CartService) { }

  ngOnInit() {
    this.products = this.productsService.getProducts();
    this.sub = this.productsService.channel$.subscribe(data => this.products = data);
  }

  onBuy(product) {
    this.productsService.buyProduct(product);
    this.cartService.addToCart(product);
  }

}
