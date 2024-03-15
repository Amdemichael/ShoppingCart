import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ShoppingCartExampleComponent } from './shopping-cart-example/shopping-cart-example.component';

@NgModule({
  declarations: [
    AppComponent,
    ShoppingCartExampleComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
