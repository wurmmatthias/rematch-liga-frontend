import { Component } from '@angular/core';
import { Loginmodal } from '../loginmodal/loginmodal';
import { Router } from '@angular/router';
import { RouterModule } from '@angular/router';
import { NgIf } from '@angular/common';
import { Button } from '../button/button';
import { AuthService } from '../../services/auth';

@Component({
  selector: 'app-navbar',
  imports: [RouterModule, Loginmodal, Button, NgIf],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css'
})
export class Navbar {
  isMobileMenuOpen = false;
  showLoginModal = false;
  loggedIn = false;

  constructor(public auth: AuthService, private router: Router) {
    this.auth.isLoggedIn$.subscribe(state => this.loggedIn = state);
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