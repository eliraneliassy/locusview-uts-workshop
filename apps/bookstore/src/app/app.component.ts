import { DialogPreviewComponent } from './dialog-preview/dialog-preview.component';
import { ItemComponent } from './item/item.component';
import { Book } from './books.interface';
import { BooksService } from './books.service';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component } from '@angular/core';
import { delay, Observable, of } from 'rxjs';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'locusview-uts-workshop-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  // changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent {

  searchTerm = 'Angular';

  books$: Observable<Book[]>;

  constructor(private booksService: BooksService, public dialog: MatDialog) {
    this.books$ = this.booksService.getBooks(this.searchTerm);


  }

  previewItem(item: Book) {
    this.dialog.open(DialogPreviewComponent, { data: item });
  }

}
