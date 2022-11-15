import { ItemComponent } from './item/item.component';
import { By } from '@angular/platform-browser';
import { BOOKS_MOCK } from './books.mock';
import { BooksService } from './books.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { of, delay } from 'rxjs';


describe('AppComponent', () => {

  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;
  const booksServiceMock = {
    getBooks: (term: string) =>
      of(BOOKS_MOCK).pipe(delay(1000))
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AppComponent, ItemComponent],
      imports: [HttpClientTestingModule],
      providers: [
        { provide: BooksService, useValue: booksServiceMock }
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;

    fixture.detectChanges();
  });

  it('should create the app', () => {
    expect(component).toBeTruthy();
  });

  // it('should render items', () => {
  //   const items = fixture.debugElement.queryAll(By.css('.book-item'));

  //   expect(items.length).toEqual(10);

  //   const firstItem = items[0];
  //   const firstItemTitle = firstItem.query(By.css('.title')).nativeElement.textContent;
  //   expect(firstItemTitle).toContain(BOOKS_MOCK[0].title);

  //   const cmp1 = fixture.debugElement.queryAll(By.directive(ItemComponent))[0];
  //   expect(cmp1.componentInstance.book).toEqual(BOOKS_MOCK[0]);
  // })

  it('should render items', () => {
    const items = fixture.debugElement.queryAll(By.css('.book-item'));

    expect(items.length).toEqual(10);

    const firstItem = items[0];
    const firstItemTitle = firstItem.query(By.css('.title')).nativeElement.textContent;
    expect(firstItemTitle).toContain(BOOKS_MOCK[0].title);

    const cmp1 = fixture.debugElement.queryAll(By.directive(ItemComponent))[0];
    expect(cmp1.componentInstance.book).toEqual(BOOKS_MOCK[0]);
  })


});
