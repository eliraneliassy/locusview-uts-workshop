import { BOOKS_MOCK } from './../books.mock';
import { By } from '@angular/platform-browser';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemComponent } from './item.component';

describe('ItemComponent', () => {
  let component: ItemComponent;
  let fixture: ComponentFixture<ItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ItemComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

    component.book = BOOKS_MOCK[0];
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render component for spesific item', () => {
    fixture.detectChanges();

    const title: HTMLDivElement = fixture.debugElement.query(By.css('.title')).nativeElement;
    expect(title.textContent).toContain(BOOKS_MOCK[0].title);
  })
});
