import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthService } from '../../services/auth';
import { Hero } from '../../components/hero/hero';

@Component({
  selector: 'app-dashboard',
  imports: [CommonModule, Hero],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css'
})
export class Dashboard implements OnInit {
  user: any = null;
  private auth = inject(AuthService);

  async ngOnInit() {
    const token = this.auth.getToken();
    if (token) {
      // DummyJSON: return static dummy user (id: 1)
      const response = await fetch('https://dummyjson.com/users/1');
      this.user = await response.json();
    }
  }
}
