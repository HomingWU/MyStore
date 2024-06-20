import { Component } from '@angular/core';
import { Product } from '../../models/Product';
import { ProductService } from '../../services/product.service';
import { ProductItemComponent } from '../product-item/product-item.component';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [ProductItemComponent],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent {
  products: Product[] = [];

  constructor(private productService: ProductService) {}

  ngOnInit() {
    this.productService.getProducts().subscribe((products) => {
      for (let index = 0; index < products.length; index++) {
        const product = products[index];
        product["amount"] = 0;
      };
      this.products = products;
    });
  }
}
