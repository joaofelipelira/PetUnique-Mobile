import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; 
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private apiUrl = 'https://sua-api.com/login'; 

  constructor(private http: HttpClient) {}


  login(email: string, password: string): Observable<any> {
    return this.http.post(this.apiUrl, { email, password });
  }

  isAuthenticated(): boolean {

    const token = localStorage.getItem('auth_token');
    return !!token; 
  }

  logout() {
    localStorage.removeItem('auth_token'); 
  }
} 