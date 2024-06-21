import { Component, Input } from '@angular/core';
import { Product } from '../../models/Product';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-product-item',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './product-item.component.html',
  styleUrl: './product-item.component.css'
})
export class ProductItemComponent {

  numbers: number[] = Array.from({ length: 11 }, (_, i) => i);

  @Input() product: Product = {
    id: 0,
    name: '',
    price: 0,
    description: '',
    url: '',
    amount: 0
  };

  constructor() {}

  ngOnInit(): void {}
  addToCart(number : string) {
    this.product.amount += parseInt(number, 10);
    alert('Added to cart');
  }

}
