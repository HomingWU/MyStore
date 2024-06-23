import { Injectable } from '@angular/core';
import { Product } from '../models/Product';

export interface CartItem extends Product {
  amount: number;
}

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cartItems : Map<number, CartItem> = new Map<number, CartItem>();

  constructor() { }

  getCartItem(id : number) : CartItem | undefined {
    return this.cartItems.get(id);
  }

  addToCart(product : Product, amount : number) : void{
      const currentProduct = this.cartItems.get(product.id);
      if (currentProduct) {
        currentProduct.amount += amount;
        this.cartItems.set(product.id, currentProduct);
      } else {
      const cartItem = { ...product, amount };
      this.cartItems.set(product.id, cartItem);
    }
  }

  getCartItems() : CartItem[] {
    return Array.from(this.cartItems.values());
  }

  updateCartItem(product : Product, amount : number) : void{
    const currentCartItem = this.cartItems.get(product.id);
    if (currentCartItem) {
      currentCartItem.amount = amount;
      this.cartItems.set(product.id, currentCartItem);
      if (currentCartItem.amount <= 0) {
        this.cartItems.delete(product.id);
      }
    }
  }
}
