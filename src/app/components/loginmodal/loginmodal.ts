import { Component, EventEmitter, Input, Output } from '@angular/core';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-loginmodal',
  imports: [NgIf],
  templateUrl: './loginmodal.html',
  styleUrl: './loginmodal.css'
})
export class Loginmodal {
  @Input() visible = false;
  @Output() close = new EventEmitter<void>();

  closeModal() {
    this.close.emit();
  }
}
