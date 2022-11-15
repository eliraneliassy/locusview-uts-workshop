import { DialogPreviewComponent } from './dialog-preview/dialog-preview.component';
import { MatDialogModule } from '@angular/material/dialog';
import { flush, waitForAsync } from '@angular/core/testing';
import { tick } from '@angular/core/testing';
import { fakeAsync } from '@angular/core/testing';
import { ItemComponent } from './item/item.component';
import { By } from '@angular/platform-browser';
import { BOOKS_MOCK } from './books.mock';
import { BooksService } from './books.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { of, delay, Observable } from 'rxjs';
import { Book } from './books.interface';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { HarnessLoader } from '@angular/cdk/testing';
import { TestbedHarnessEnvironment } from '@angular/cdk/testing/testbed';
import { MatDialogHarness } from '@angular/material/dialog/testing';


describe('AppComponent', () => {

  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;
  const booksServiceMock = {
    getBooks: (term: string): Observable<Book[]> =>
      new Observable((subscriber) => {
        setTimeout(() => {
          subscriber.next(BOOKS_MOCK),
            subscriber.complete()
        }, 1000)
      })
    // of(BOOKS_MOCK)
    //   .pipe(
    //     delay(1000)
    // )
  } as any;


  beforeEach(async () => {


    await TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        ItemComponent
      ],
      imports: [
        HttpClientTestingModule,
        MatDialogModule,
        NoopAnimationsModule
      ],
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

  it('should render items - fakeasync', fakeAsync(() => {

    fixture.detectChanges();
    tick(2000);

    fixture.detectChanges();

    const items = fixture.debugElement.queryAll(By.css('.book-item'));

    expect(items.length).toEqual(10);

    const firstItem = items[0];
    const firstItemTitle = firstItem.query(By.css('.title')).nativeElement.textContent;
    expect(firstItemTitle).toContain(BOOKS_MOCK[0].title);

    const cmp1 = fixture.debugElement.queryAll(By.directive(ItemComponent))[0];
    expect(cmp1.componentInstance.book).toEqual(BOOKS_MOCK[0]);
  }));





  it('should render items - waitForAsync', waitForAsync(async () => {


    await fixture.whenStable();
    fixture.detectChanges();

    const items = fixture.debugElement.queryAll(By.css('.book-item'));

    expect(items.length).toEqual(10);

    const firstItem = items[0];
    const firstItemTitle = firstItem.query(By.css('.title')).nativeElement.textContent;
    expect(firstItemTitle).toContain(BOOKS_MOCK[0].title);

    const cmp1 = fixture.debugElement.queryAll(By.directive(ItemComponent))[0];
    expect(cmp1.componentInstance.book).toEqual(BOOKS_MOCK[0]);


  }))

  it('should open dialog when clicking on item', () => {
    const openDialogSpy = jest.spyOn(component.dialog, 'open');

    component.previewItem(BOOKS_MOCK[0]);

    expect(openDialogSpy).toHaveBeenCalledTimes(1);

  })

  it('should show dialog when clicking on item', async () => {
    const loader: HarnessLoader = TestbedHarnessEnvironment.documentRootLoader(fixture);

    component.previewItem(BOOKS_MOCK[0]);
    const dialog = await loader.getAllHarnesses(MatDialogHarness);

    expect(dialog.length).toEqual(1);

  })





});
