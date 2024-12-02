import { Component } from '@angular/core';
import { AuthService } from '../services/auth.service'; // Ajuste o caminho se necessário
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

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
  registrationError: string = '';

  constructor(private authService: AuthService, private router: Router) {}

  // Função de envio do formulário
  onSubmit(form: NgForm) { // Adicione o parâmetro form
    if (this.password !== this.confirmPassword) {
      this.passwordsMismatch = true;
    } else {
      this.passwordsMismatch = false;
      const isRegistered = this.authService.register(this.email, this.password);

      if (isRegistered) {
        console.log('Formulário enviado com sucesso!');
        this.router.navigate(['/login']); // Redireciona para a página de login após o registro
      } else {
        this.registrationError = 'Email já cadastrado!'; // Mensagem de erro se o email já existir
      }
    }
  }
}