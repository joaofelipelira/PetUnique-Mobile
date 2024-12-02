import { Component, OnInit } from '@angular/core';
import { MyService } from '../my-service.service'; // Ajuste o caminho conforme necessário
import { Router } from '@angular/router'; // Importar o Router

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  data: any;

  constructor(private myService: MyService, private router: Router) { } // Injetar o Router

  ngOnInit() {
    this.myService.getData().subscribe(response => {
      this.data = response;
      console.log(this.data);
    });
  }

  acessar() {
    // Redireciona para a tela de login
    this.router.navigate(['/login']); // Adicione esta linha
  }

  registrar() {
    // Redireciona para a tela de registro
    this.router.navigate(['/register']); // Adicione esta linha se necessário
  }
}