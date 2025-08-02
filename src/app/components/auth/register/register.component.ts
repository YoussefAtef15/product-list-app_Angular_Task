import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './register.component.html',
  styleUrls: ['./register.css']
})
export class RegisterComponent {
  user = {
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  };

  passwordMismatch = false;

  constructor(private router: Router) {}

  onRegister() {
    const users = JSON.parse(localStorage.getItem('users') || '[]');

    const existingUser = users.find((u: any) => u.email === this.user.email);
    if (existingUser) {
      alert('Email is already registered');
      return;
    }

    if (this.user.password !== this.user.confirmPassword) {
      this.passwordMismatch = true;
      return;
    } else {
      this.passwordMismatch = false;
    }

    users.push({
      name: this.user.name,
      email: this.user.email,
      password: this.user.password
    });

    localStorage.setItem('users', JSON.stringify(users));
    alert('Registered successfully');
    this.router.navigate(['/login']);
  }
}
