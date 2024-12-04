import { Component } from '@angular/core';
import { AuthService } from '../services/auth.service'; 
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage {

  name: string = '';
  surname: string = '';
  email: string = '';
  password: string = '';
  confirmPassword: string = '';

  passwordsMismatch: boolean = false;
  registrationError: string = '';

  constructor(private authService: AuthService, private router: Router) {}

  onSubmit(form: NgForm) { 
    if (this.password !== this.confirmPassword) {
      this.passwordsMismatch = true;
    } else {
      this.passwordsMismatch = false;
      const isRegistered = this.authService.register(this.email, this.password);

      if (isRegistered) {
        console.log('Formulário enviado com sucesso!');
        
        localStorage.setItem('user', JSON.stringify({
          name: this.name,
          surname: this.surname,
          email: this.email
        }));

        this.router.navigate(['/login']);
      } else {
        this.registrationError = 'Email já cadastrado!'; 
      }
    }
  }
}
