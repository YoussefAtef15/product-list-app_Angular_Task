// login.component.ts
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../../services/auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.css']
})
export class LoginComponent {
  user = {
    email: '',
    password: ''
  };

  constructor(private router: Router, private auth: AuthService) {}

  onLogin() {
    const users = JSON.parse(localStorage.getItem('users') || '[]');
    const existingUser = users.find((u: any) =>
      u.email === this.user.email && u.password === this.user.password
    );

    if (existingUser) {
      this.auth.login(existingUser);
      alert('Login successful');
      this.router.navigate(['/']);
    } else {
      alert('Invalid email or password');
    }
  }
}
