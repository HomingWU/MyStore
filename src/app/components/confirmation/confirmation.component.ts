import { Component } from '@angular/core';
import { CartService } from '../../services/cart.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-confirmation',
  standalone: true,
  imports: [],
  templateUrl: './confirmation.component.html',
  styleUrl: './confirmation.component.css'
})
export class ConfirmationComponent {

  user : string = '';
  total : number = 0;

  constructor(private router : Router, private cartService : CartService) {}

  ngOnInit() {
    this.user = this.cartService.getName();
    this.total = this.cartService.getTotal();
    this.cartService.clearCart();
  }
  goToHome() {
    this.router.navigate(['/']);
  }
}
