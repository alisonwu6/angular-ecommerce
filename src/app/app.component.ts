import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { ProductCategoryMenuComponent } from "./components/product-category-menu/product-category-menu.component";
import { SearchComponent } from "./components/search/search.component";
import { CartStatusComponent } from "./components/cart-status/cart-status.component";
import { LoginStatusComponent } from "./components/login-status/login-status.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ProductCategoryMenuComponent, SearchComponent, CartStatusComponent, RouterModule, LoginStatusComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular-ecommerce';

  onClick(event: MouseEvent): void {
    // console.log('Link clicked!');
    event.stopPropagation(); // Ensure parent listeners don't interfere
  }
}
