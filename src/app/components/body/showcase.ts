import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Showcase {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
}

@Component({
  imports: [CommonModule, ShowcaseComponent],
  selector: 'app-showcase',
  styleUrl: './showcase.css',
  templateUrl: './showcase.html',
})
export class ShowcaseComponent {
  showcaseItems: Showcase[] = [
    {
      id: 1,
      title: 'Modern Sofas',
      description: 'Comfort meets clean lines for any living room.',
      imageUrl: 'assets/showcase-sofa.jpg'
    },
    {
      id: 2,
      title: 'Minimal Lighting',
      description: 'Ambient fixtures that set the mood.',
      imageUrl: 'assets/showcase-lighting.jpg'
    },
    {
      id: 3,
      title: 'Wood Furniture',
      description: 'Natural textures, built to last.',
      imageUrl: 'assets/showcase-wood.jpg'
    },
    {
      id: 4,
      title: 'Statement Decor',
      description: 'Small pieces that make a big impact.',
      imageUrl: 'assets/showcase-decor.jpg'
    }
  ];
}