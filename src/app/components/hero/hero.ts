import { Component, Input } from '@angular/core';
import { NgIf } from '@angular/common';
import { NgStyle } from '@angular/common';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-hero',
  imports: [NgIf, NgStyle, NgClass],
  templateUrl: './hero.html',
  styleUrl: './hero.css'
})
export class Hero {
  @Input() title: string = '';
  @Input() subtitle: string = '';
  @Input() buttonText?: string;
  @Input() buttonLink?: string;
  @Input() backgroundImage?: string;
}
