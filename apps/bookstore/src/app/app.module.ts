import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { DiscountPipe } from './discount.pipe';
import { ChangeColorDirective } from './change-color.directive';
import { ItemComponent } from './item/item.component';

@NgModule({
  declarations: [
    AppComponent,
    DiscountPipe,
    ChangeColorDirective,
    ItemComponent,
  ],
  imports: [BrowserModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
