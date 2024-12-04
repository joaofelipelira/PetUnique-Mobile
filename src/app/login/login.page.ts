import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service'; 

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
  showPassword: boolean = false; // Variável para alternar entre mostrar/ocultar senha

  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit() {}

  onSubmit() {
    this.validateEmail(this.email);

    if (this.emailInvalid) {
      return;
    }

    if (this.authService.login(this.email, this.password)) {
      this.router.navigate(['/success-page']);
      this.loginFailed = false;
    } else {
      this.loginFailed = true;
    }
  }

  validateEmail(email: string) {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    this.emailInvalid = !emailPattern.test(email);
  }

  togglePasswordVisibility() {
    this.showPassword = !this.showPassword; // Alterna entre mostrar e ocultar a senha
  }
}
