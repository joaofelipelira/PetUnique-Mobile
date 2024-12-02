import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service'; // Importar AuthService

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  email: string = '';
  password: string = '';
  emailInvalid: boolean = false;
  loginFailed: boolean = false;

  constructor(private router: Router, private authService: AuthService) {} // Injetar AuthService

  ngOnInit() {}

  onSubmit() {
    this.validateEmail(this.email);
    
    if (!this.emailInvalid) {
      this.authService.login(this.email, this.password).subscribe(
        response => {
          // Supondo que a resposta contenha um token de autenticação
          if (response.token) {
            localStorage.setItem('auth_token', response.token); // Armazenar o token
            this.router.navigate(['/home']); // Redirecionar para a página inicial
          } else {
            this.loginFailed = true; // Exibir mensagem de erro
          }
        },
        error => {
          this.loginFailed = true; // Exibir mensagem de erro em caso de falha
          console.log('Erro ao fazer login:', error);
        }
      );
    }
  }

  validateEmail(email: string) {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    this.emailInvalid = !emailPattern.test(email);
  }
}