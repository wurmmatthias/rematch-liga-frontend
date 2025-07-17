import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class AuthService {
  private token: string | null = null;
  private loggedIn = new BehaviorSubject<boolean>(false);

  isLoggedIn$ = this.loggedIn.asObservable();

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
      return true;
    }

    return false;
  } catch (err) {
    console.error('Login failed:', err);
    return false;
  }
}

  logout() {
    this.token = null;
    this.loggedIn.next(false);
  }

  getToken() {
    return this.token;
  }
}
