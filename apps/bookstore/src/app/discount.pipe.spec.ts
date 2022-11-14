import { pipe } from 'rxjs';
import { BOOKS_MOCK } from './books.mock';
import { DiscountPipe } from './discount.pipe';

describe('DiscountPipe', () => {
  let pipe: DiscountPipe;

  beforeEach(() => {
    pipe = new DiscountPipe();
  })
  it('create an instance', () => {

    expect(pipe).toBeTruthy();
  });

  it('should give discount if price is more than 50', () => {
    const item1 = BOOKS_MOCK[0];
    const item2 = BOOKS_MOCK[1];

    const result: number = pipe.transform(item1.price, 0.1);

    expect(result).toBe(76.5);

    

    const result2: number = pipe.transform(item2.price, 0.1);

    expect(result2).toBe(item2.price);


  })
});
