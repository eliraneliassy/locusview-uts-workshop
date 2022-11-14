import { Book } from './books.interface';
import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BooksService {

  BASE_URL = `https://www.googleapis.com/books/v1/volumes`

  constructor(private httpClient: HttpClient) { }

  getBooks(term: string): Observable<Book[]> {

    let params: HttpParams = new HttpParams();
    params = params.append('q', term);

    return this.httpClient.get(this.BASE_URL, { params })
      .pipe(
        map((result: any) => result.items),
        map((items: any[]) => items.map(item => (
          {
            title: item.volumeInfo.title,
            previewImgUrl: item.volumeInfo.imageLinks.thumbnail,
            price: Math.random() * 100
          }
        )))
      );

  }
}
