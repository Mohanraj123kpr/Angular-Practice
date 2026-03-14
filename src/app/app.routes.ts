import { Routes } from '@angular/router';
import { Home } from './Products/home/home';
import { Cart } from './Products/cart/cart'
import {ProductDetails} from './Products/product-details/product-details'
export const routes: Routes = [
    { path: '', component: Home },
    { path: 'cart', component: Cart },
    { path: 'details', component: ProductDetails}
];
