import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { DiscountPipe } from './discount.pipe';
import { ChangeColorDirective } from './change-color.directive';


@NgModule({
  declarations: [AppComponent, DiscountPipe, ChangeColorDirective],
  imports: [BrowserModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
