import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


// book.service.ts
@Injectable({
  providedIn: 'root'
})
export class BookService {
  private apiUrl = 'your-api-url/books';

  constructor(private http: HttpClient) {}

  getBooks() {
    return this.http.get<any[]>(this.apiUrl);
  }

  getBook(id: string) {
    return this.http.get<any>(`${this.apiUrl}/${id}`);
  }

  borrowBook(bookId: number, borrowData: any) {
    return this.http.post(`${this.apiUrl}/${bookId}/borrow`, borrowData);
  }

  searchBooks(params: any) {
    return this.http.get<any[]>(`${this.apiUrl}/search`, { params });
  }

  advancedSearch(criteria: any) {
    return this.http.post<any[]>(`${this.apiUrl}/advanced-search`, criteria);
  }

}
