import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToastService } from '../../services/toast';
import { NgFor, NgIf } from '@angular/common';

@Component({
  selector: 'app-toast',
  imports: [CommonModule, NgIf, NgFor],
  templateUrl: './toast.html',
  styleUrl: './toast.css'
})
export class Toast {
  toastService = inject(ToastService);
}
