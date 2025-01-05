import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular-ecommerce';

  onClick(event: MouseEvent): void {
    console.log('Link clicked!');
    event.stopPropagation(); // Ensure parent listeners don't interfere
  }
}
