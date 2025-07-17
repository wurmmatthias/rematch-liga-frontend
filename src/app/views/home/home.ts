import { Component } from '@angular/core';
import { Hero } from '../../components/hero/hero';
import { MatchTable } from '../../components/match-table/match-table';
import { UpcomingMatches } from '../../components/upcoming-matches/upcoming-matches';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  imports: [Hero, MatchTable, UpcomingMatches, CommonModule],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {
matches = [
  {
    teamA: 'Team Envision',
    teamB: 'Pixel Raiders',
    scoreA: 2,
    scoreB: 1,
    date: '2025-07-10',
    stage: 'Quarterfinal'
  },
  {
    teamA: 'Skyburners',
    teamB: 'Cyber Wolves',
    scoreA: 0,
    scoreB: 3,
    date: '2025-07-11'
  },
    {
    teamA: 'Team Envision',
    teamB: 'Pixel Raiders',
    scoreA: 2,
    scoreB: 1,
    date: '2025-07-10',
    stage: 'Quarterfinal'
  },
  {
    teamA: 'Skyburners',
    teamB: 'Cyber Wolves',
    scoreA: 0,
    scoreB: 3,
    date: '2025-07-11'
  },
    {
    teamA: 'Team Envision',
    teamB: 'Pixel Raiders',
    scoreA: 2,
    scoreB: 1,
    date: '2025-07-10',
    stage: 'Quarterfinal'
  },
  {
    teamA: 'Skyburners',
    teamB: 'Cyber Wolves',
    scoreA: 0,
    scoreB: 3,
    date: '2025-07-11'
  },
    {
    teamA: 'Team Envision',
    teamB: 'Pixel Raiders',
    scoreA: 2,
    scoreB: 1,
    date: '2025-07-10',
    stage: 'Quarterfinal'
  },
  {
    teamA: 'Skyburners',
    teamB: 'Cyber Wolves',
    scoreA: 0,
    scoreB: 3,
    date: '2025-07-11'
  }
];

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
