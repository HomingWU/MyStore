import { Component } from '@angular/core';
import { CartItem, CartService } from '../../services/cart.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css',
})
export class CartComponent {
  name: string = '';
  address: string = '';
  creditCard: string = '';
  cartItems: CartItem[] = [];
  total: number = 0;

  constructor(
    private cartService: CartService,
    private router: Router,
  ) {}

  ngOnInit() {
    this.cartItems = this.cartService.getCartItems();
    this.total = this.cartService.getTotal();
  }

  updateCartItem(product: CartItem, number: string) {
    const amount = parseInt(number, 10);
    this.cartService.updateCartItem(product, amount);
    this.cartItems = this.cartService.getCartItems();
    this.total = this.cartService.getTotal();
  }

  submitForm() {
    this.cartService.setName(this.name);
    this.cartService.setAddress(this.address);
    this.cartService.setCreditCard(this.creditCard);
    this.router.navigate(['/confirmation']);
  }
}
