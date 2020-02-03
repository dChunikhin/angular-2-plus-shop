import {ChangeDetectionStrategy, Component, EventEmitter, Input, OnChanges, Output} from '@angular/core';
import { Product } from '../../../../data/products';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductComponent implements OnChanges {

  private isOutOfStock: boolean; // то, что используется в шаблоне, должно быть публичным

  @Input() product: Product;
  @Output() buy = new EventEmitter<Product>();

  constructor() { }

  ngOnChanges() {
    this.isOutOfStock = this.product.stockCount === 0;
  }

  onClick(): void {
    this.buy.emit(this.product);
  }

}
