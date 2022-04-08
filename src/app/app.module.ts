import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ProductCategoryListComponent } from './product-category-list/product-category-list.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductCategoryListComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
