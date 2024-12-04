import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {
 
  getUserProfile() {
    return [
      { label: 'Nome', value: 'João' },
      { label: 'Sobrenome', value: 'Lira' },
      { label: 'Email', value: 'joao.lira@example.com' }
    ];
  }
}
