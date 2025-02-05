import { Component, OnInit, Signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-checkout',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss'],
})
export class CheckoutComponent implements OnInit {
  cartItems!: Signal<any[]>;
  totalPrice!: Signal<number>;

  constructor(private cartService: CartService) {}

  ngOnInit(): void {
    this.cartItems = this.cartService.cartItems;
    this.totalPrice = this.cartService.totalPrice;
  }

  placeOrder() {
    alert('Order placed successfully!');
    this.cartService.clearCart();
  }
}
