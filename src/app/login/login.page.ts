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
  showPassword: boolean = false; 

  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit() {}

  onSubmit() {
    this.validateEmail(this.email);

    if (this.emailInvalid) {
      return;
    }

    if (this.authService.login(this.email, this.password)) {
      const user = JSON.parse(localStorage.getItem('user') || '{}');

      localStorage.setItem('user', JSON.stringify(user));

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
    this.showPassword = !this.showPassword; 
  }
}
