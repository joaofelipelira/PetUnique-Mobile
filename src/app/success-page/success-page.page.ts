import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-success-page',
  templateUrl: './success-page.page.html',
  styleUrls: ['./success-page.page.scss'],
})
export class SuccessPagePage {
  constructor(private router: Router) {}

  goToNewsHub() {
    this.router.navigate(['/news-hub']); // Substitua '/news-hub' pelo caminho correto da sua página de notícias
  }
}
