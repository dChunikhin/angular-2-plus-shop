import { Component, EventEmitter, Input, Output, ChangeDetectionStrategy } from '@angular/core';
import { Product } from '../../../../data/products';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CartItemComponent {

  @Input() product: Product;
  @Output() remove = new EventEmitter();
  @Output() amountChange = new EventEmitter();

  constructor() { }

  onRemove() {
    this.remove.emit(this.product);
  }

  onIncreaseCount() {
    this.amountChange.emit( { product: this.product, operation: 'increase' });
  }

  onDecreaseCount() {
    this.amountChange.emit( { product: this.product, operation: 'decrease' });
  }

}
