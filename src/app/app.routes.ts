import { Routes } from '@angular/router';
import { Home } from './Movies-Page/home/home';
import { Search } from './Movies-Page/search/search';

export const routes: Routes = [
    { path: '', component: Home},
    { path: 'search', component: Search},
];
