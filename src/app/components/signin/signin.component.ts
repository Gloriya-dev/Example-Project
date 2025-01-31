import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signin',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss'],
})
export class SigninComponent {
  credentials = { email: '', password: '' };

  constructor(private router: Router) {}

  onSubmit() {
    console.log('Sign-in:', this.credentials);
    alert('Sign-in successful!');
    this.router.navigate(['/']);
  }
}
