import { Component, inject } from '@angular/core';
import { MovieService } from '../../movie-service';
import { Header } from "../header/header";
import { RouterLink } from "@angular/router";
import { Signal } from '@angular/core';
@Component({
  selector: 'app-home',
  imports: [Header, RouterLink],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {
  private movieService = inject(MovieService)
  movies: any[] = []
  limit: number = 4;
  filteredMovies: any[] = [];
  fetchMovies() {
    this.movieService.getMovies().subscribe({
      next: (res) => {
        this.movieService.updateMoviesList(res);
        this.movies = res as any[]
        this.movies = this.movies.sort((A, B) => B.year - A.year)
        this.filteredMovies = this.movies.slice(0, this.limit)
        console.log(this.filteredMovies)
      }, error: (err) => {
        console.log(err, "error iss")
      }
    })
  }
  ngOnInit() {
    this.fetchMovies()
  }

  showMore() {
    this.limit += 4;
    this.filteredMovies = this.movies.slice(0, this.limit)
  }
}
