import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  constructor(private router: Router) {}

  acessar() {
    // Redireciona para a tela de login (ou outra tela que você implementar)
    this.router.navigate(['/login']);
  }

  registrar() {
    // Redireciona para a tela de registro (ou outra tela que você implementar)
    this.router.navigate(['/register']);
  }
}