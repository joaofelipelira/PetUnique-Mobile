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
    this.router.navigate(['/noticias']); 
  }

  goToProfile() {
    this.router.navigate(['/profile']); 
  }
}
