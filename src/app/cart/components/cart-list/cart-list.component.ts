import { Component } from '@angular/core';
import { ProductsService } from '../../../products/services/products.service';
import { Product } from '../../../../data/products';

@Component({
  selector: 'app-cart-list',
  templateUrl: './cart-list.component.html',
  styleUrls: ['./cart-list.component.scss']
})
export class CartListComponent {

  private products: Product[] = [];

  constructor(private productsService: ProductsService) { }

  onRemove(id: string) {
    this.productsService.removeFromBasket(id);
  }

}
