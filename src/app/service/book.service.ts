import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {Book} from '../model/book';
import {environment} from '../../environments/environment';
import {HttpClient} from '@angular/common/http';

const API_URL = `${environment.apiUrl}`;
@Injectable({
  providedIn: 'root'
})
export class BookService {

  constructor(private http: HttpClient) { }

  // @ts-ignore
  getAllBooks(): Observable<Book[]> {
    return this.http.get<Book[]>(`${API_URL}/books`);
  }

  createNewBook(book: Book): Observable<Book> {
    return this.http.post<Book>(`${API_URL}/books`, book);
  }

  updateBookInfo(id: number, book: Book): Observable<Book> {
    return this.http.put<Book>(`${API_URL}/books/${id}`, book);
  }

  deleteBook(id: number): Observable<Book> {
    return this.http.delete<Book>(`${API_URL}/books/${id}`);
  }

  getBookById(id: number): Observable<Book> {
    return this.http.get<Book>(`${API_URL}/books/${id}`);
  }



}
