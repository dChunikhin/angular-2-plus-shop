import { Component, Input } from '@angular/core';
import { CartService} from '../cart.service';
import { Product } from '../../data/products';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent {

  @Input() product: Product;

  constructor(private cartService: CartService) { }

  public onBuy() {
    this.cartService.buyProduct(this.product);
  }

}
