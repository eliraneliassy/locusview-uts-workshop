import { BOOKS_MOCK } from './books.mock';
import { Book } from './books.interface';
import { TestBed } from '@angular/core/testing';

import { BooksService } from './books.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { HttpErrorResponse } from '@angular/common/http';

describe('BooksService', () => {
  let service: BooksService;
  let httpController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });
    service = TestBed.inject(BooksService);
    httpController = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should getbooks and return value', () => {

    const mock: Book[] = BOOKS_MOCK;
    console.log(1);

    service.getBooks('Angular')
      .subscribe((results: Book[]) => {
        
        console.log(2);
        expect(results).toBeTruthy();
        expect(results.length).toBe(10);
        expect(results[0].title).toEqual(mock[0].title);

      });

    const req = httpController.expectOne(`${service.BASE_URL}?q=Angular`);

    expect(req.request.method).toEqual('GET');

    req.flush(mock);

    httpController.verify();

  });

  it('should test network error', () => {
    service.getBooks('Angular')
      .subscribe(
        () => fail(),
        (error: HttpErrorResponse) => {
          expect(error.status).toBe(500);
          expect(error.message).toEqual('Internal Server Error');
        }
      );

    const req = httpController.expectOne(`${service.BASE_URL}?q=Angular`);

    const err = new ErrorEvent('server error', { message: 'Internal Server Error' });
    req.error(err, { status: 500 });

    httpController.verify();
  })
});
