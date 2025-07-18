import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ToastService } from './toast';

@Injectable({ providedIn: 'root' })
export class AuthService {
  private token: string | null = null;
  private loggedIn = new BehaviorSubject<boolean>(false);

  isLoggedIn$ = this.loggedIn.asObservable();

  constructor(private toast: ToastService) {}


async login(username: string, password: string): Promise<boolean> {
  try {
    const res = await fetch('https://dummyjson.com/auth/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ username, password })
    });

    if (!res.ok) return false; // ❗ reject if status not 200

    const data = await res.json();

    if (data.accessToken) {
      this.token = data.accessToken;
      this.loggedIn.next(true);
      this.toast.success('Erfolgreich eingeloggt!');
      return true;
    }

    return false;
  } catch (err) {
    console.error('Login failed:', err);
    return false;
  }
}

  logout() {
    localStorage.removeItem('token');
    this.loggedIn.next(false);
    this.toast.success("Du wurdest abgemeldet!");
  }

  getToken() {
    return this.token;
  }
}
