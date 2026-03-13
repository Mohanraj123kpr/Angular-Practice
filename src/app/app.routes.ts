import { Routes } from '@angular/router';
import { Home } from './Movies-Page/home/home';
import { Search } from './Movies-Page/search/search';
import { MovieDetails } from './Movies-Page/movie-details/movie-details';

export const routes: Routes = [
    { path: '', component: Home},
    { path: 'search', component: Search},
    { path: 'details', component: MovieDetails}
];
