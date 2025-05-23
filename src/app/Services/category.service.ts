import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  private apiUrl = 'your-api-url/categories';

  constructor(private http: HttpClient) {}

  getCategories() {
    return this.http.get<any[]>(this.apiUrl);
  }

  getCategoryBooks(categoryId: number) {
    return this.http.get<any[]>(`${this.apiUrl}/${categoryId}/books`);
  }

   searchCategories(query: string) {
    return this.http.get<any[]>(`${this.apiUrl}/search`, {
      params: { query }
    });
  }

  getCategoriesSorted(sortBy: string) {
    return this.http.get<any[]>(`${this.apiUrl}`, {
      params: { sort: sortBy }
    });
  }
}
