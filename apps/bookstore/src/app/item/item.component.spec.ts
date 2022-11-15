import { BOOKS_MOCK } from './../books.mock';
import { By } from '@angular/platform-browser';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemComponent } from './item.component';
import { Book } from '../books.interface';

describe('ItemComponent', () => {
  let component: ItemComponent;
  let fixture: ComponentFixture<ItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ItemComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ItemComponent);
    component = fixture.componentInstance;
    component.book = BOOKS_MOCK[0];
    fixture.detectChanges();

    
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render component for spesific item', () => {
    


    const title: HTMLDivElement = fixture.debugElement.query(By.css('.title')).nativeElement;
    expect(title.textContent).toContain(BOOKS_MOCK[0].title);

    const img: HTMLImageElement = fixture.debugElement.query(By.css('img')).nativeElement;
    expect(img.src).toEqual(BOOKS_MOCK[0].previewImgUrl);

    const price: HTMLDivElement = fixture.debugElement.query(By.css('.price')).nativeElement;
    expect(Number(price.textContent)).toEqual(BOOKS_MOCK[0].price)

  });

  it('should trigger add to cart', () => {
    jest.spyOn(component.addToCart, 'emit');

    component.addToCartClicked();

    expect(component.addToCart.emit).toHaveBeenCalledTimes(1);


  });

  it('should trigger add to cart - observables', () => {
    component.addToCart.subscribe((item: Book) => {
      expect(item).toEqual(BOOKS_MOCK[0]),
        fail()
    });

    component.addToCartClicked();
  });

  it('should remove from cart by clicking the remove btn', () => {
    jest.spyOn(component.removeFromCart, 'emit');
    

    const removeBtn = fixture.debugElement.query(By.css('.remove-from-cart-btn')).nativeElement;

    removeBtn.click();

    expect(component.removeFromCart.emit).toHaveBeenCalledTimes(1);

  })
});
