import { Component } from '@angular/core';
import { Product } from '../../models/Product';
import { CartService } from '../../services/cart.service';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { ProductService } from '../../services/product.service';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-product-item-detail',
  standalone: true,
  imports: [CommonModule, RouterModule, NgbModule],
  templateUrl: './product-item-detail.component.html',
  styleUrl: './product-item-detail.component.css'
})
export class ProductItemDetailComponent {

  numbers: number[] = Array.from({length: 10}, (_, i) => i + 1);

  product: Product= {
    id: 0,
    name: '',
    price: 0,
    description: '',
    url: '',
  };

  constructor(private route : ActivatedRoute, private cartService : CartService, private productService : ProductService) { }

  ngOnInit() : void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.productService.getProduct(id).subscribe((product) => {
      if (product) {
        this.product = product;
      }
    });
  }
  addToCart(product : Product, number : string) {
    const amount = parseInt(number, 10);
    this.cartService.addToCart(product, amount);
    alert('Added to cart');
  }
}
