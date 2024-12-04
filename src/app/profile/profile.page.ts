import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {
  user: any = null;

  constructor(private router: Router) {}

  ngOnInit() {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      this.user = JSON.parse(storedUser); // Se encontrado, converte de volta para objeto
    } else {
      this.router.navigate(['/login']); // Redireciona para login se não houver usuário logado
    }
  }

  logout() {
    localStorage.removeItem('user'); // Remove o usuário do localStorage
    this.router.navigate(['/login']); // Redireciona para o login após desconectar
  }

  goToNewsHub() {
    this.router.navigate(['/noticias']); // Redireciona para o Hub de Fatos
  }
}
