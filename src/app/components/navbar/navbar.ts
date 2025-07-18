import { Component, inject  } from '@angular/core';
import { Loginmodal } from '../loginmodal/loginmodal';
import { Router } from '@angular/router';
import { RouterModule } from '@angular/router';
import { NgIf, AsyncPipe  } from '@angular/common';
import { Button } from '../button/button';
import { AuthService } from '../../services/auth';
import { of } from 'rxjs';


@Component({
  selector: 'app-navbar',
  imports: [RouterModule, Loginmodal, Button, NgIf, AsyncPipe],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css'
})
export class Navbar {
  auth = inject(AuthService);
  router = inject(Router);
  isMobileMenuOpen = false;
  showLoginModal = false;
  isLoggedIn$ = this.auth.isLoggedIn$;

  constructor(public authService: AuthService, private routerInstance: Router) {
    // ✅ Keep in sync with auth state
    //this.authService.isLoggedIn$.subscribe(state => this.isLoggedIn$ = state);
  }

  toggleMobileMenu() {
    this.isMobileMenuOpen = !this.isMobileMenuOpen;
  }

  toggleLoginModal() {
    this.showLoginModal = !this.showLoginModal;
  }

  logout() {
    this.auth.logout();
    this.router.navigate(['/']);
  }
}
