import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router'; // Importando Router

@Component({
  selector: 'app-noticias',
  templateUrl: './noticias.page.html',
  styleUrls: ['./noticias.page.scss'],
})
export class NoticiasPage {
  fact: string = '';
  imageUrl: string = '';

  constructor(private http: HttpClient, private router: Router) {
    this.loadDogFactAndImage();
  }

  loadDogFactAndImage() {
    this.http.get<any>('https://dogapi.dog/api/v2/facts').subscribe({
      next: (factResponse) => {
        const randomFact = factResponse.data[0]?.attributes.body || 'Fato não disponível.';
        this.fact = randomFact;

        this.http.get<any>('https://random.dog/woof.json').subscribe({
          next: (imageResponse) => {
            this.imageUrl = imageResponse.url || '';
          },
          error: (err) => console.error('Erro ao carregar imagem:', err),
        });
      },
      error: (err) => console.error('Erro ao carregar fato:', err),
    });
  }

  goToProfile() {
    this.router.navigate(['/profile']); 
  }
}
