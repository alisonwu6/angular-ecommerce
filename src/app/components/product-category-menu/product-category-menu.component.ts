import { Component } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { ProductCategory } from '../../common/product-category';
import { NgFor } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-product-category-menu',
  imports: [RouterModule, NgFor],
  templateUrl: './product-category-menu.component.html',
  styleUrl: './product-category-menu.component.css'
})
export class ProductCategoryMenuComponent {
  
  productCategories: ProductCategory[] = [];
  
  constructor(private productService: ProductService) { }

  ngOnInit() {
    this.listProductCategories();
  }

  listProductCategories() {

    this.productService.getProductCategories().subscribe(
      data => {
        this.productCategories = data;
      }
    );
  }
}
