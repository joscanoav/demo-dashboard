import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
})
export class SidebarComponent {
  isLoggedIn = false;

  constructor(private auth: AuthService) {
    this.isLoggedIn = !!localStorage.getItem('token');
  }

  logout(): void {
    this.auth.logout();
    location.reload();
  }
}
