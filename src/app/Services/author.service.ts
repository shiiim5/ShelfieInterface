import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

// author.service.ts
@Injectable({
  providedIn: 'root'
})
export class AuthorService {
  private apiUrl = 'your-api-url/authors';

  constructor(private http: HttpClient) {}

  getAuthors() {
    return this.http.get<any[]>(this.apiUrl);
  }

  getAuthorBooks(authorId: number) {
    return this.http.get<any[]>(`${this.apiUrl}/${authorId}/books`);
  }

  searchAuthors(query: string) {
    return this.http.get<any[]>(`${this.apiUrl}/search`, {
      params: { query }
    });
  }

  getAuthorsByNationality(nationality: string) {
    return this.http.get<any[]>(`${this.apiUrl}/nationality/${nationality}`);
  }
}
