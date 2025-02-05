import {
  Injectable,
  signal,
  WritableSignal,
  computed,
  effect,
} from '@angular/core';
import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  private cartItemsSignal: WritableSignal<Product[]> = signal(this.loadCart());
  private totalPriceSignal = computed(() =>
    this.cartItemsSignal().reduce(
      (total, item) => total + item.price * item.quantity,
      0
    )
  );

  cartItems = this.cartItemsSignal.asReadonly();
  totalPrice = this.totalPriceSignal;

  constructor() {
    effect(() => {
      this.saveCart(this.cartItemsSignal());
    });
  }

  private loadCart(): Product[] {
    const cart = localStorage.getItem('cart');
    return cart ? JSON.parse(cart) : [];
  }

  private saveCart(cart: Product[]) {
    localStorage.setItem('cart', JSON.stringify(cart));
  }

  addToCart(product: Product) {
    this.cartItemsSignal.update((items) => {
      const existingItem = items.find((item) => item.id === product.id);
      if (existingItem) {
        return items.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        return [...items, { ...product, quantity: 1 }];
      }
    });
  }

  updateQuantity(productId: number, quantity: number) {
    if (quantity <= 0) {
      this.removeFromCart(productId);
    } else {
      this.cartItemsSignal.update((items) =>
        items.map((item) =>
          item.id === productId ? { ...item, quantity } : item
        )
      );
    }
  }

  removeFromCart(productId: number) {
    this.cartItemsSignal.update((items) =>
      items.filter((item) => item.id !== productId)
    );
  }

  clearCart() {
    this.cartItemsSignal.set([]);
  }
}
