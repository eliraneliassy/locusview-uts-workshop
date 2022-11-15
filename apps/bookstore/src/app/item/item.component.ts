import { Book } from './../books.interface';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'locusview-uts-workshop-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss'],
})
export class ItemComponent {

  @Input() book?: Book;
  @Output() addToCart: EventEmitter<Book> = new EventEmitter<Book>();
  @Output() removeFromCart: EventEmitter<Book> = new EventEmitter<Book>();

  addToCartClicked() {
    this.addToCart.emit(this.book);
  }

  removeFromCartClicked() {
    this.removeFromCart.emit(this.book);
  }

}
