import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';
import { signal } from '@angular/core';
@Injectable({
  providedIn: 'root',
})
export class MovieService {
  private moviesListSubject = new BehaviorSubject<any>(null);
  readonly moviesList$ = this.moviesListSubject.asObservable();
  selectedMovie = signal<any>(null);

  constructor(private http: HttpClient) {}

  getMovies() {
    return this.http.get('assets/movies.json');
  }

  updateMoviesList(moviesList: any): void {
    this.moviesListSubject.next(moviesList);
  }

  getMoviesList() {
    return this.moviesListSubject.getValue();
  }

  setSelectedMovie(movie: any) {
    this.selectedMovie.set(movie)
  }

  getSelectedMovie() {
    return this.selectedMovie()
  }
}
