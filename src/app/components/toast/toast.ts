import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToastService } from '../../services/toast';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-toast',
  imports: [CommonModule, NgFor],
  templateUrl: './toast.html',
  styleUrl: './toast.css'
})
export class Toast {
  toastService = inject(ToastService);
}
