import { Component, Input } from '@angular/core';
import { NgStyle } from '@angular/common';

@Component({
  selector: 'app-hero',
  imports: [NgStyle],
  templateUrl: './hero.html',
  styleUrl: './hero.css'
})
export class Hero {
  @Input() backgroundImage: string | null = null;

}
