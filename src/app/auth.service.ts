import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; // Para fazer requisições HTTP
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private apiUrl = 'https://sua-api.com/login'; // Substitua pela URL da sua API

  constructor(private http: HttpClient) {}

  // Método para fazer login
  login(email: string, password: string): Observable<any> {
    return this.http.post(this.apiUrl, { email, password });
  }

  // Método para verificar se o usuário está autenticado (opcional)
  isAuthenticated(): boolean {
    // Aqui você pode implementar a lógica para verificar se o usuário está autenticado
    // Por exemplo, verificando a presença de um token no localStorage
    const token = localStorage.getItem('auth_token');
    return !!token; // Retorna true se o token existir
  }

  // Método para logout (opcional)
  logout() {
    localStorage.removeItem('auth_token'); // Remove o token do localStorage
  }
}