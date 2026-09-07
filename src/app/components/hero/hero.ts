import { Component,EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
// import { EventEmitter } from 'stream';


@Component({
  imports: [CommonModule],
  selector: 'app-hero',
  styleUrl: './hero.css',
  templateUrl: './hero.html',
})
export class HeroComponent {
   @Input() headline: string = '';
  @Input() subtext: string = '';
  @Input() ctaLabel: string = 'Get Started';
  @Input() imageUrl: string = '';

  @Output() ctaClicked = new EventEmitter<void>();

  onCtaClick(): void {
    this.ctaClicked.emit();
}

}