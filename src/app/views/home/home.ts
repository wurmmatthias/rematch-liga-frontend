import { Component } from '@angular/core';
import { Hero } from '../../components/hero/hero';
import { MatchTable } from '../../components/match-table/match-table';

@Component({
  selector: 'app-home',
  imports: [Hero, MatchTable],
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

}
