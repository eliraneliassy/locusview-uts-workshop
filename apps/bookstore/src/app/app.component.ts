import { Book } from './books.interface';
import { BooksService } from './books.service';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component } from '@angular/core';
import { delay, Observable, of } from 'rxjs';

@Component({
  selector: 'locusview-uts-workshop-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent {

  searchTerm = 'Angular';

  books$: Observable<Book[]>;

  constructor(private booksService: BooksService) {
    this.books$ = this.booksService.getBooks(this.searchTerm);

    console.log(1);
    setTimeout(() => { console.log(2) }, 0);
    Promise.resolve(3).then(console.log)
    of(4).pipe(delay(0)).subscribe(console.log);
    console.log(5);

  }

}
