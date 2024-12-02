import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service'; // Certifique-se de que o caminho esteja correto

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

  constructor(private router: Router, private authService: AuthService) {}

  ngOnInit() {}

  onSubmit() {
    this.validateEmail(this.email);
    
    if (!this.emailInvalid) {
      const isLoggedIn = this.authService.login(this.email, this.password);

      if (isLoggedIn) {
        this.router.navigate(['/success']); // Redirecionar para a nova página de sucesso
      } else {
        this.loginFailed = true; // Exibir mensagem de erro
      }
    }
  }

  validateEmail(email: string) {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    this.emailInvalid = !emailPattern.test(email);
  }
}