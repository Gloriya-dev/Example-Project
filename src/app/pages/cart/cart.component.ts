import { Component, Signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartService } from '../../services/cart.service';
import { Product } from '../../models/product.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
})
export class CartComponent {
  cartItems!: Signal<Product[]>;
  totalPrice!: Signal<number>;

  constructor(private cartService: CartService, private router: Router) {}

  ngOnInit(): void {
    this.cartItems = this.cartService.cartItems;
    this.totalPrice = this.cartService.totalPrice;
  }

  removeItem(productId: number) {
    this.cartService.removeFromCart(productId);
  }

  updateQuantity(productId: number, event: Event) {
    const inputElement = event.target as HTMLInputElement;
    const newQuantity = Number(inputElement.value);
    this.cartService.updateQuantity(productId, newQuantity);
  }

  clearCart() {
    this.cartService.clearCart();
  }

  checkoutForm() {
    this.router.navigate(['/checkout_details']);
  }
}
