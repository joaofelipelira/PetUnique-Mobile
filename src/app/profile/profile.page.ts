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
    // Verificar se o usuário está armazenado no localStorage
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      this.user = JSON.parse(storedUser); // Recupera os dados do usuário do localStorage
    } else {
      this.router.navigate(['/login']); // Redireciona para a tela de login se não encontrar dados
    }
  }

  logout() {
    localStorage.removeItem('user'); // Remove os dados do usuário do localStorage
    this.router.navigate(['/login']); // Redireciona para a tela de login após desconectar
  }

  goToNewsHub() {
    this.router.navigate(['/noticias']); // Redireciona para o Hub de Fatos
  }
}
