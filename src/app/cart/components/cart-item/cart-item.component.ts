import {Component, EventEmitter, Input, Output} from '@angular/core';
import { Product } from '../../../../data/products';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.scss']
})
export class CartItemComponent {

  @Input() product: Product;
  @Output() remove = new EventEmitter();

  constructor() { }

  onRemove() {
    this.remove.emit(this.product);
    console.log(`Product with ${this.product.id} was removed from the basket`);
  }

}
