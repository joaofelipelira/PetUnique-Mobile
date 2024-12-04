import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private users: { email: string, password: string }[] = [];
  constructor() {
    this.loadUsers(); 
  }

  register(email: string, password: string): boolean {
    const existingUser  = this.users.find(user => user.email === email);
    if (existingUser ) {
      return false; 
    }
    this.users.push({ email, password });
    this.saveUsers(); 
    return true;
  }

  login(email: string, password: string): boolean {

    const user = this.users.find(u => u.email === email && u.password === password);
    return !!user; 
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