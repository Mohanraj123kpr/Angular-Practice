import { Injectable, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Products } from './Products/home/home';
import { of, tap } from 'rxjs';

export interface cartItem {
  product: Products;
  quantity: number;
}

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private products = 'assets/products.json';
  private allProducts = signal<Products[]>([]);
  selectedProduct = signal<Products | undefined>(undefined);
  cartItems = signal<cartItem[]>([]);
  constructor(private http: HttpClient) {}

  getProducts() {
    if(this.allProducts().length === 0) {
      return this.http.get(this.products).pipe(
      tap((res: any) => {
        this.allProducts.set(res.products)
      })
    );
    } 
    return of({ products: this.allProducts()})
  }

  getProductByCategory(category: string) {
    debugger;
    if(category === 'All') {
      return this.allProducts();
    } 
    return this.allProducts().filter(product => product.category == category)
  }

  getCategories() {
    const cats = this.allProducts().map(product => product.category)
    return ['All', ...new Set(cats)]
  }

  setProduct(product: Products) {
    this.selectedProduct.set(product);
  }

  getSelectedProduct() {
    return this.selectedProduct();
  }

  addToCart(product: Products, quantity: number) {
    const currentCart = [...this.cartItems()];
    const existingItemIndex = currentCart.findIndex((item) => item.product.id === product.id); // ✅ Correct
    if (existingItemIndex > -1) {
      currentCart[existingItemIndex].quantity += quantity;
    } else {
      currentCart.push({
        product,
        quantity,
      });
    }
    this.cartItems.set(currentCart);
    console.log(this.cartItems());
  }

  updateQuantity(productId: string, quantity: number) {
    console.log(quantity)
    const currentCart = [...this.cartItems()];
    const existingItemIndex = currentCart.findIndex((item) => item.product.id === productId); // ✅ Correct
    if (existingItemIndex > -1) {
      if (quantity <= 0) {
        currentCart.splice(existingItemIndex, 1); // Remove if quantity is 0
      } else {
        currentCart[existingItemIndex].quantity = quantity;
      }
      this.cartItems.set(currentCart);
    }
  }

  getCartItems() {
    return this.cartItems();
  }

  getSearchProducts(searchText: string) {
    if(searchText.trim()) {
      return this.allProducts().filter(p => p.name.toLowerCase().includes(searchText.toLowerCase()))
    }
    return this.allProducts()
  }
}
