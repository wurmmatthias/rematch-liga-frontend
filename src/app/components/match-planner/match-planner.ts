import {
  Component,
  AfterViewInit,
  ElementRef,
  ViewChild,
  HostListener
} from '@angular/core';

@Component({
  selector: 'app-match-planner',
  standalone: true,
  templateUrl: './match-planner.html',
  styleUrl: './match-planner.css'
})
export class MatchPlanner implements AfterViewInit {
  @ViewChild('canvas', { static: true }) canvasRef!: ElementRef<HTMLCanvasElement>;
  ctx!: CanvasRenderingContext2D;

  players: { x: number; y: number; name: string; team: 'red' | 'blue' }[] = [];
  arrows: { from: { x: number; y: number }; to: { x: number; y: number } }[] = [];
  undoStack: { players: any[]; arrows: any[] }[] = [];

  currentArrow: { x: number; y: number } | null = null;
  selectedTool: 'player' | 'arrow' = 'player';
  selectedTeam: 'red' | 'blue' = 'red';

  redCounter = 1;
  blueCounter = 1;

  ngAfterViewInit(): void {
    const canvas = this.canvasRef.nativeElement;
    canvas.width = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;
    this.ctx = canvas.getContext('2d')!;
    this.redraw();
  }

  @HostListener('window:resize')
  onResize() {
    const canvas = this.canvasRef.nativeElement;
    canvas.width = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;
    this.redraw();
  }

  onClick(event: MouseEvent) {
    const rect = this.canvasRef.nativeElement.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;

    this.pushUndoState();

    if (this.selectedTool === 'player') {
      const name = this.selectedTeam === 'red' ? String(this.redCounter++) : String(this.blueCounter++);
      this.players.push({ x, y, name, team: this.selectedTeam });
    } else if (this.selectedTool === 'arrow') {
      if (this.currentArrow) {
        this.arrows.push({ from: this.currentArrow, to: { x, y } });
        this.currentArrow = null;
      } else {
        this.currentArrow = { x, y };
      }
    }

    this.redraw();
  }

  drawField() {
    const ctx = this.ctx;
    const canvas = this.canvasRef.nativeElement;

    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = '#0ab85bff';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    ctx.strokeStyle = '#fff';
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(canvas.width / 2, 0);
    ctx.lineTo(canvas.width / 2, canvas.height);
    ctx.stroke();

    ctx.beginPath();
    ctx.arc(canvas.width / 2, canvas.height / 2, 60, 0, 2 * Math.PI);
    ctx.stroke();
  }

  redraw() {
    this.drawField();

    for (const arrow of this.arrows) {
      this.ctx.beginPath();
      this.ctx.moveTo(arrow.from.x, arrow.from.y);
      this.ctx.lineTo(arrow.to.x, arrow.to.y);
      this.ctx.strokeStyle = 'yellow';
      this.ctx.lineWidth = 2;
      this.ctx.stroke();

      const angle = Math.atan2(arrow.to.y - arrow.from.y, arrow.to.x - arrow.from.x);
      const headLength = 10;
      this.ctx.beginPath();
      this.ctx.moveTo(arrow.to.x, arrow.to.y);
      this.ctx.lineTo(
        arrow.to.x - headLength * Math.cos(angle - Math.PI / 6),
        arrow.to.y - headLength * Math.sin(angle - Math.PI / 6)
      );
      this.ctx.lineTo(
        arrow.to.x - headLength * Math.cos(angle + Math.PI / 6),
        arrow.to.y - headLength * Math.sin(angle + Math.PI / 6)
      );
      this.ctx.lineTo(arrow.to.x, arrow.to.y);
      this.ctx.fillStyle = 'yellow';
      this.ctx.fill();
    }

    for (const player of this.players) {
      this.ctx.beginPath();
      this.ctx.arc(player.x, player.y, 16, 0, 2 * Math.PI);
      this.ctx.fillStyle = player.team;
      this.ctx.fill();

      this.ctx.beginPath();
      this.ctx.strokeStyle = '#fff';
      this.ctx.lineWidth = 3;
      this.ctx.arc(player.x, player.y, 16, 0, 2 * Math.PI);
      this.ctx.stroke();

      this.ctx.fillStyle = 'white';
      this.ctx.font = '13px Arial';
      this.ctx.textAlign = 'center';
      this.ctx.textBaseline = 'middle';
      this.ctx.fillText(player.name, player.x, player.y);
    }
  }

  setTool(tool: 'player' | 'arrow') {
    this.selectedTool = tool;
    this.currentArrow = null;
  }

  setTeam(team: 'red' | 'blue') {
    this.selectedTeam = team;
  }

  reset() {
    this.players = [];
    this.arrows = [];
    this.currentArrow = null;
    this.undoStack = [];
    this.redCounter = 1;
    this.blueCounter = 1;
    this.redraw();
  }

  pushUndoState() {
    this.undoStack.push({
      players: [...this.players.map(p => ({ ...p }))],
      arrows: [...this.arrows.map(a => ({ from: { ...a.from }, to: { ...a.to } }))]
    });
  }

  undo() {
    const last = this.undoStack.pop();
    if (last) {
      this.players = last.players;
      this.arrows = last.arrows;
      this.currentArrow = null;
      this.redraw();
    }
  }

  exportImage() {
    const link = document.createElement('a');
    link.download = 'rematch-plan.png';
    link.href = this.canvasRef.nativeElement.toDataURL();
    link.click();
  }
}
