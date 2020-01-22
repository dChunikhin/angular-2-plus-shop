import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FirstComponent } from './first/components/first.component';
import { ProductComponent } from './product/components/product/product.component';
import { ProductListComponent } from './product/components/product-list/product-list.component';
// import { ProductsService } from './product/services/products.service';
// import { CartService } from './cart/services/cart.service';
import { CartComponent } from './cart/components/cart/cart.component';

@NgModule({
  declarations: [
    AppComponent,
    FirstComponent,
    ProductComponent,
    ProductListComponent,
    CartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  // не нужно добавлять тут сервисы
  // providers: [ProductsService, CartService],
  bootstrap: [AppComponent]
})
export class AppModule { }
