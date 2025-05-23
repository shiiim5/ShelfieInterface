import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'your-api-url';

  constructor(private http: HttpClient) {}

  login(credentials: {email: string, password: string}) {
    return this.http.post(`${this.apiUrl}/auth/login`, credentials);
  }

  register(user: any) {
    return this.http.post(`${this.apiUrl}/auth/register`, user);
  }
}
