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
  @Output() remove: EventEmitter<Product> = new EventEmitter();
  @Output() amountChange = new EventEmitter();

  public editorMode = false;

  constructor() { }

  onRemove() {
    this.remove.emit(this.product);
  }

  enableEditorMode() {
    this.editorMode = true;
  }

  onBlur({ target }) {
    this.editorMode = false;
    this.amountChange.emit( { product: this.product, amount: +target.value });
  }

}
