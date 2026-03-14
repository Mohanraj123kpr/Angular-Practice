import { Component, inject, signal } from '@angular/core';
import { ProductService } from '../../product-service';
import { Header } from '../../Movies-Page/header/header';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { debounceTime } from 'rxjs';
export interface Products {
  id: string;
  name: string;
  category: string;
  price: number;
  rating: number;
  stock: number;
  image: string;
  description: string;
  quantity?: number;
}

interface HeaderItems {
  label: string;
  route: string;
}

@Component({
  selector: 'app-home',
  imports: [Header, FormsModule],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {
  private productService = inject(ProductService);
  private router = inject(Router);
  headerItems = signal<HeaderItems[]>([
    { label: 'Home', route: '/' },
    { label: 'Cart', route: '/cart' },
    { label: 'Details', route: '/details' },
  ]);
  productCounts = signal<Map<string, number>>(new Map());
  products = signal<Products[]>([]);
  filteredProducts = signal<any>([]);
  categories = signal<string[]>([]);
  selectedCategory = signal<string>('');
  searchText = signal<string>('')
  ngOnInit() {
    this.productService.getProducts().subscribe({
      next: (res: any) => {
        this.products.set(res.products.sort((A: Products, B: Products) => A.price - B.price));
        this.categories.set(this.productService.getCategories());
        console.log(this.products());
      },
    });
  }

  navigateDetails(item: Products, event: Event) {
    event.preventDefault();
    this.productService.setProduct(item);
    this.router.navigate(['details']);
  }

  getCount(productId: string): number {
    return this.productCounts().get(productId) || 0;
  }

  increment(productId: string) {
    const counts = new Map(this.productCounts());
    counts.set(productId, this.getCount(productId) + 1);
    this.productCounts.set(counts);
  }

  decrement(productId: string) {
    const currentCount = this.getCount(productId);
    if (currentCount > 0) {
      const counts = new Map(this.productCounts());
      counts.set(productId, currentCount - 1);
      this.productCounts.set(counts);
    }
  }

  addToCart(product: Products) {
    const count = this.getCount(product.id);
    if (count > 0) {
      this.productService.addToCart(product, count);
    } else {
      window.alert('Please Update the quantity');
    }
  }

  onFilterChange() {
    this.products.set(this.productService.getProductByCategory(this.selectedCategory()));
    console.log(this.products());
  }

  onSeachChange() {
    this.products.set(this.productService.getSearchProducts(this.searchText()))
  }
}
