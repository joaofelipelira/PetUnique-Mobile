import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private users: { email: string, password: string }[] = []; // Array para armazenar os dados dos usuários

  constructor() {
    this.loadUsers(); // Carrega os usuários do localStorage ao inicializar
  }

  register(email: string, password: string): boolean {
    const existingUser  = this.users.find(user => user.email === email);
    if (existingUser ) {
      return false; // Email já cadastrado
    }
    this.users.push({ email, password });
    this.saveUsers(); // Salva os usuários no localStorage
    return true; // Registro bem-sucedido
  }

  login(email: string, password: string): boolean {
    // Verifica se o usuário existe e se a senha está correta
    const user = this.users.find(u => u.email === email && u.password === password);
    return !!user; // Retorna true se o usuário foi encontrado e a senha está correta
  }

  private saveUsers() {
    localStorage.setItem('users', JSON.stringify(this.users));
  }

  private loadUsers() {
    const users = localStorage.getItem('users');
    if (users) {
      this.users = JSON.parse(users);
    }
  }
}