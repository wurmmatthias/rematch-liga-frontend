import { Component, Input  } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-upcoming-matches',
  imports: [CommonModule],
  templateUrl: './upcoming-matches.html',
  styleUrl: './upcoming-matches.css'
})
export class UpcomingMatches {
  @Input() teamAName: string = '';
  @Input() teamBName: string = '';
  @Input() teamALogo: string = '';
  @Input() teamBLogo: string = '';
  @Input() date?: string;
}
