import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShowcaseComponent } from '../body/showcase';
import { ContactComponent } from '../../contact/contact';
import { HeroComponent } from '../hero/hero';


@Component({
  imports: [CommonModule,ShowcaseComponent, ContactComponent, HeroComponent],
  selector: 'app-home',
  styleUrl: './home.css',
  templateUrl: './home.html',
})
export class HomeComponent {
   heroHeadline = 'Elevate Every Interior with Posh';
  heroSubtext = 'Modern furniture and decor designed to make every room feel like home.';

  onHeroCta(): void {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  }


}
