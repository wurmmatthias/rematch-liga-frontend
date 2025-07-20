import { Component } from '@angular/core';
import { UpcomingMatches } from '../../components/upcoming-matches/upcoming-matches';
import { NgForOf } from '@angular/common';

@Component({
  selector: 'app-matches',
  imports: [UpcomingMatches, NgForOf],
  templateUrl: './matches.html',
  styleUrl: './matches.css'
})
export class Matches {
  upcomingMatches = [
  {
    teamAName: 'Cyber Wolves',
    teamBName: 'Skyburners',
    teamALogo: 'https://picsum.photos/seed/abcdef/64/64',
    teamBLogo: 'https://picsum.photos/64/64',
    date: 'July 21 – 20:00 CET'
  },
  {
    teamAName: 'Cyber Wolves',
    teamBName: 'Skyburners',
    teamALogo: 'https://picsum.photos/64/64',
    teamBLogo: 'https://picsum.photos/64/64',
    date: 'July 22 – 23:00 CET'
  },
];
}
