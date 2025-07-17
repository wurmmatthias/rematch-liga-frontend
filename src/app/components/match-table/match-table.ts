import { Component, Input } from '@angular/core';
import { NgForOf } from '@angular/common';

interface Match {
  teamA: string;
  teamB: string;
  scoreA: number;
  scoreB: number;
  date: string;
  stage?: string;
}

@Component({
  selector: 'app-match-table',
  imports: [NgForOf],
  templateUrl: './match-table.html',
  styleUrl: './match-table.css'
})
export class MatchTable {
  @Input() matches: Match[] = [];
}
