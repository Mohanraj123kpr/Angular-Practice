import { Component, inject } from '@angular/core';
import { Header } from '../../Movies-Page/header/header';
import { cartItem, ProductService } from '../../product-service';
import { DecimalPipe } from '@angular/common';

@Component({
  selector: 'app-cart',
  imports: [Header, DecimalPipe],
  templateUrl: './cart.html',
  styleUrl: './cart.scss',
})
export class Cart {
  private productService = inject(ProductService);
  cartItems = this.productService.cartItems

  increment(item: cartItem) {
    const quantity = item.quantity + 1;
    this.productService.updateQuantity(item.product.id, quantity);
  }

  decrement(item: cartItem) {
    const quantity = item.quantity - 1;
    this.productService.updateQuantity(item.product.id, quantity);
    console.log(this.cartItems())
  }
}
