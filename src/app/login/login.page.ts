import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  email: string = '';
  password: string = '';
  emailInvalid: boolean = false;

  constructor() {}

  ngOnInit() {}

  onSubmit() {
    // Aqui você pode adicionar a lógica para fazer login
    console.log('Email:', this.email);
    console.log('Senha:', this.password);

    // Exemplo de validação de email
    this.validateEmail(this.email);
  }

  validateEmail(email: string) {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    this.emailInvalid = !emailPattern.test(email);
  }
}