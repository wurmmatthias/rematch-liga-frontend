import { Component, Input } from '@angular/core';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-hero',
  imports: [NgIf],
  templateUrl: './hero.html',
  styleUrl: './hero.css'
})
export class Hero {
  @Input() title: string = '';
  @Input() subtitle: string = '';
  @Input() buttonText?: string;
  @Input() buttonLink?: string;
}
