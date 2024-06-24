import { Injectable } from '@angular/core';
import { Product } from '../models/Product';

export interface CartItem extends Product {
  amount: number;
}

@Injectable({
  providedIn: 'root',
})
export class CartService {
  private cartItems: Map<number, CartItem> = new Map<number, CartItem>();

  private name: string = '';
  private address: string = '';
  private creditCard: string = '';

  constructor() {}

  getCartItem(id: number): CartItem | undefined {
    return this.cartItems.get(id);
  }

  addToCart(product: Product, amount: number): void {
    const currentProduct = this.cartItems.get(product.id);
    if (currentProduct) {
      currentProduct.amount += amount;
      this.cartItems.set(product.id, currentProduct);
    } else {
      const cartItem = { ...product, amount };
      this.cartItems.set(product.id, cartItem);
    }
    console.log('added to cart');
    console.log(this.cartItems);
  }

  getCartItems(): CartItem[] {
    return Array.from(this.cartItems.values());
  }

  updateCartItem(product: Product, amount: number): void {
    const currentCartItem = this.cartItems.get(product.id);
    if (currentCartItem) {
      currentCartItem.amount = amount;
      this.cartItems.set(product.id, currentCartItem);
      if (currentCartItem.amount <= 0) {
        this.cartItems.delete(product.id);
        alert('Item removed from cart');
      }
    }
  }
  clearCart(): void {
    this.cartItems.clear();
    this.setName('');
    this.setAddress('');
    this.setCreditCard('');
  }
  getName(): string {
    return this.name;
  }
  setName(name: string): void {
    this.name = name;
  }
  getAddress(): string {
    return this.address;
  }
  setAddress(address: string): void {
    this.address = address;
  }
  getCreditCard(): string {
    return this.creditCard;
  }
  setCreditCard(creditCard: string): void {
    this.creditCard = creditCard;
  }
  getTotal(): number {
    const total = Array.from(this.cartItems.values()).reduce(
      (acc, item) => acc + item.price * item.amount,
      0,
    );
    return parseFloat(total.toFixed(2));
  }
}
