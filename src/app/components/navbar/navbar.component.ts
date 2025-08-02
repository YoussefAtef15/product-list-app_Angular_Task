// navbar.component.ts
import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  searchTerm = '';

  constructor(private router: Router, public auth: AuthService) {}

  onSearch() {
    if (this.searchTerm.trim()) {
      this.router.navigate(['/products'], { queryParams: { search: this.searchTerm } });
    }
  }

  logout() {
    this.auth.logout();
    this.router.navigate(['/login']);
  }

  isLoggedIn(): boolean {
    return this.auth.isLoggedIn();
  }

  get currentUserName() {
    return this.auth.getCurrentUser()?.name || '';
  }
}
