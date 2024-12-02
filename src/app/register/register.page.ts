import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage {

  // Propriedades para os campos do formulário
  name: string = '';
  surname: string = '';
  email: string = '';
  password: string = '';
  confirmPassword: string = '';

  // Para verificar se as senhas coincidem
  passwordsMismatch: boolean = false;

  constructor() {}

  // Função de envio do formulário
  onSubmit() {
    if (this.password !== this.confirmPassword) {
      this.passwordsMismatch = true;
    } else {
      this.passwordsMismatch = false;
      // Aqui você pode adicionar a lógica para enviar os dados para o servidor ou outro processo
      console.log('Formulário enviado com sucesso!');
    }
  }
}
