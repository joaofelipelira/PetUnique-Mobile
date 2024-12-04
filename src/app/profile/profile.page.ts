import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage {
  user: any = null;

  constructor(private router: Router) {}

  ngOnInit() {
    const storedUser = localStorage.getItem('user');

    if (storedUser) {
      this.user = JSON.parse(storedUser);
    } else {
      this.router.navigate(['/login']);
    }
  }

  logout() {
    localStorage.removeItem('user'); 
    this.router.navigate(['/login']); 
  }

  goToNewsHub() {
    this.router.navigate(['/noticias']); 
  }
}
