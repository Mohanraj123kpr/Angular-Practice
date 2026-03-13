import { Component, inject } from '@angular/core';
import { Header } from "../header/header";
import { FormsModule } from '@angular/forms';
import { MovieService } from '../../movie-service';
@Component({
  selector: 'app-search',
  imports: [Header, FormsModule],
  templateUrl: './search.html',
  styleUrl: './search.scss',
})
export class Search {
  private movieService = inject(MovieService)
  searchText: string = ''
  movies = [] as any
  filteredMovies = [] as any
  fetchMovies() {
    this.movieService.getMovies().subscribe({
      next: (res) => {
        this.movies = res as any[]
      }
    })
  }

  debounce(fn: any, wait: any) {
    let timer: any;
    return  (...args: any) => {
      clearTimeout(timer);
      timer = setTimeout(() => {  
        fn.apply(this, args);
      }, wait);
    }
  }

  searchMovie() {
    this.filteredMovies = this.movies.filter((movie: any) => {
      return movie.title.toLowerCase().includes(this.searchText.toLowerCase())
    })
    console.log(this.filteredMovies)
  }

  debouncedSearch = this.debounce(this.searchMovie, 500)

  ngOnInit() {
    this.fetchMovies()
  }
}
