import { Component, Input } from '@angular/core';
import { NgIf } from '@angular/common';
import { NgStyle } from '@angular/common';
import { NgClass } from '@angular/common';
import { TwitchPlayer } from '../twitch-player/twitch-player';

@Component({
  selector: 'app-hero',
  imports: [NgIf, NgStyle, NgClass, TwitchPlayer],
  templateUrl: './hero.html',
  styleUrl: './hero.css'
})
export class Hero {
  @Input() title: string = '';
  @Input() subtitle: string = '';
  @Input() buttonText?: string;
  @Input() buttonLink?: string;
  @Input() backgroundImage?: string;
  @Input() showTwitchToggleButton: boolean = false;

  twitchVisible: boolean = false;

  toggleTwitchPlayer(): void {
    this.twitchVisible = !this.twitchVisible;
  }
}
