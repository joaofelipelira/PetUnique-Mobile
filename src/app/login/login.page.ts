import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service'; // Importe o AuthService

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

  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit() {}

  onSubmit() {
    this.validateEmail(this.email);

    if (this.emailInvalid) {
      return; // Não prosseguir se o email for inválido
    }

    // Utilize o AuthService para verificar o login
    if (this.authService.login(this.email, this.password)) {
      this.router.navigate(['/success-page']); // Redireciona para a tela de sucesso
      this.loginFailed = false; // Resetar o estado de falha no login
    } else {
      this.loginFailed = true; // Definir como verdadeiro se as credenciais forem inválidas
    }
  }

  validateEmail(email: string) {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    this.emailInvalid = !emailPattern.test(email);
  }
}
