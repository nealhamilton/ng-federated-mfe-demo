import { Component } from '@angular/core';

@Component({
  /**
   * INFO:
   * Notice app root selector is unique across
   * all micro frontends
   */
  selector: 'app-root-01',
  imports: [],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'mfe-01';
}
