import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Product } from '../../../../data/products';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductComponent implements OnInit {

  private isOutOfStock: boolean;

  @Input() product: Product;
  @Output() buy = new EventEmitter<Product>();

  constructor() { }

  ngOnInit() {
    this.isOutOfStock = this.product.stockCount === 0;
  }

  onBuy(): void {
    this.buy.emit(this.product);
  }


}
