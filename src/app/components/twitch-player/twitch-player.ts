import { Component, Input, OnInit, OnDestroy, AfterViewInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-twitch-player',
  imports: [],
  templateUrl: './twitch-player.html',
  styleUrl: './twitch-player.css'
})
export class TwitchPlayer implements OnInit, AfterViewInit, OnDestroy {
  @Input() channel: string = 'twitch';
  @Input() width: string = '100%';
  @Input() height: string = '480';
  @Input() parent: string = window.location.hostname;

  elementId = 'twitch-embed';

  ngOnInit(): void {
    const scriptId = 'twitch-embed-script';

    if (!document.getElementById(scriptId)) {
      const script = document.createElement('script');
      script.id = scriptId;
      script.src = 'https://embed.twitch.tv/embed/v1.js';
      script.onload = () => this.safeCreatePlayer();
      document.body.appendChild(script);
    }
  }

  ngAfterViewInit(): void {
    if ((window as any).Twitch?.Embed) {
      this.safeCreatePlayer();
    }
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['channel'] && !changes['channel'].firstChange) {
      this.safeCreatePlayer();
    }
  }

  safeCreatePlayer(): void {
    requestAnimationFrame(() => {
      const container = document.getElementById(this.elementId);
      if (container) {
        container.innerHTML = ''; // clear old embed
      }

      if ((window as any).Twitch?.Embed) {
        new (window as any).Twitch.Embed(this.elementId, {
          width: this.width,
          height: this.height,
          channel: this.channel,
          parent: [this.parent],
          autoplay: false
        });
      }
    });
  }

  ngOnDestroy(): void {
    const container = document.getElementById(this.elementId);
    if (container) container.innerHTML = '';
  }
}
