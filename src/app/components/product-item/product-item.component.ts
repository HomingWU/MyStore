import { Component, Input } from '@angular/core';
import { Product } from '../../models/Product';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-product-item',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './product-item.component.html',
  styleUrl: './product-item.component.css'
})
export class ProductItemComponent {

  numbers: number[] = Array.from({length: 10}, (_, i) => i + 1);

  @Input() product: Product = {
    id: 0,
    name: '',
    price: 0,
    description: '',
    url: ''
  };

  constructor(private cartService : CartService) {}

  ngOnInit(): void {}

  addToCart(product : Product, number : string) {
    const amount = parseInt(number, 10);
    this.cartService.addToCart(product, amount);
    alert('Added to cart');
  }
}
