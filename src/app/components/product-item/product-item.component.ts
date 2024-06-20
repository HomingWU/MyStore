import { Component, Input } from '@angular/core';
import { Product } from '../../models/Product';

@Component({
  selector: 'app-product-item',
  standalone: true,
  imports: [],
  templateUrl: './product-item.component.html',
  styleUrl: './product-item.component.css'
})
export class ProductItemComponent {

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

}
