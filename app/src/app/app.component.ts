import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'Welcome to the Container App!';
  items = [
    { label: 'mfe01', path: '/mfe01' },
    { label: 'mfe02', path: '/mfe02' },
    { label: 'mfe03', path: '/mfe03' },
    { label: 'mfe04', path: '/mfe04' },
    { label: 'mfe05', path: '/mfe05' },
  ];
}
