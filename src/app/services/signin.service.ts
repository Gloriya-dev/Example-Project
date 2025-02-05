import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';

interface SigninData {
  email: string;
  password: string;
}

interface AuthResponse {
  access_token: string;
  refresh_token: string;
}

@Injectable({
  providedIn: 'root',
})
export class SigninService {
  private apiUrl = 'https://api.escuelajs.co/api/v1/auth/login';
  private authState = new BehaviorSubject<boolean>(this.hasToken());

  authState$ = this.authState.asObservable();

  constructor(private http: HttpClient) {}

  signin(payload: SigninData): Promise<AuthResponse> {
    return this.http
      .post<AuthResponse>(this.apiUrl, payload)
      .toPromise()
      .then((response) => {
        if (!response) throw new Error('Signin failed: No response received');

        localStorage.setItem('access_token', response.access_token);
        localStorage.setItem('refresh_token', response.refresh_token);

        this.authState.next(true);
        return response;
      })
      .catch((error) => {
        console.error('Signin failed:', error);
        this.authState.next(false);
        throw error;
      }) as Promise<AuthResponse>;
  }

  isAuthenticated(): boolean {
    return !!localStorage.getItem('access_token');
  }

  private hasToken(): boolean {
    return !!localStorage.getItem('access_token');
  }

  logout(): void {
    localStorage.removeItem('access_token');
    localStorage.removeItem('refresh_token');
    this.authState.next(false);
  }
}
