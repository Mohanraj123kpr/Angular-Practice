import { Component, inject } from '@angular/core';
import { Header } from '../../Movies-Page/header/header';
import { ProductService } from '../../product-service';
import { Products } from '../home/home';

@Component({
  selector: 'app-product-details',
  imports: [Header],
  templateUrl: './product-details.html',
  styleUrl: './product-details.scss',
})
export class ProductDetails {
  private productService = inject(ProductService)
  selectedProduct?: Products
  ngOnInit() {
    this.selectedProduct = this.productService.getSelectedProduct();
    console.log(this.selectedProduct)
  }
}
