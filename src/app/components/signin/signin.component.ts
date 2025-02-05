import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { SigninService } from '../../services/signin.service';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-signin',
  standalone: true,
  imports: [CommonModule, FormsModule, HttpClientModule],
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss'],
})
export class SigninComponent {
  credentials = { email: '', password: '' };
  isAuthenticated = false;
  constructor(private router: Router, private signinService: SigninService) {}

  async onSubmit() {
    try {
      await this.signinService.signin(this.credentials);
      alert('Signin successful!');
      this.router.navigate(['/']);
    } catch (error) {
      console.error('Signup failed:', error);
      alert('Signin failed. Please try again.');
    }
  }
}
