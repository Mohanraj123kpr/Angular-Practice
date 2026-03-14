import { Component, inject, signal } from '@angular/core';
import { MovieService } from '../../movie-service';
import { Header } from "../header/header";
import { Router } from "@angular/router";
@Component({
  selector: 'app-home',
  imports: [Header],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {
  private movieService = inject(MovieService)
  private router = inject(Router);
  movies: any[] = []
  limit: number = 4;
  filteredMovies: any = signal([]);
  fetchMovies() {
    this.movieService.getMovies().subscribe({
      next: (res) => {
        this.movieService.updateMoviesList(res);
        this.movies = res as any[]
        this.movies = this.movies.sort((A, B) => A.year - B.year)
        this.filteredMovies.set(this.movies.slice(0, this.limit))
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
    this.filteredMovies.set(this.movies.slice(0, this.limit))
  }

  navigateDetails(movie: any) {
    this.movieService.setSelectedMovie(movie)
    this.router.navigate(['/details'])
  }
}
