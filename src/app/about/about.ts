import { Routes } from '@angular/router';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';


// export const aboutRoutes: Routes = [
//   {
//     path: '',
//     component: AboutComponent
//   },
//   {
//     path: 'about',
//     component: AboutComponent
//   },
//   { path: '**', redirectTo: '' }
// ];

@Component({
  imports: [],
  selector: 'app-about',
  styleUrl: './about.css',
  templateUrl: './about.html',
})
export class AboutComponent {}
