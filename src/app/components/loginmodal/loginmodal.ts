import { Component, EventEmitter, Input, Output } from '@angular/core';
import { NgIf } from '@angular/common';
import { AuthService } from '../../services/auth';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-loginmodal',
  standalone: true,
  imports: [NgIf, FormsModule],
  templateUrl: './loginmodal.html',
  styleUrl: './loginmodal.css'
})
export class Loginmodal {
  @Input() visible = false;
  @Output() close = new EventEmitter<void>();

  username = '';
  password = '';
  error = '';

  constructor(private auth: AuthService) {}

  async onSubmit(event: Event) {
    event.preventDefault();
    const success = await this.auth.login(this.username, this.password);
    if (success) {
      this.closeModal();
    } else {
      this.error = 'Benutzername oder Passwort ist ungültig.';
    }
  }

  closeModal() {
    this.close.emit();
    this.error = '';
    this.username = '';
    this.password = '';
  }
}