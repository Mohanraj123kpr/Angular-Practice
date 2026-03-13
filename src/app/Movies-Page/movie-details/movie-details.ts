import { Component, inject, OnInit, signal } from '@angular/core';
import { Header } from "../header/header";
import { ActivatedRoute } from '@angular/router';
import { MovieService } from '../../movie-service';

@Component({
  selector: 'app-movie-details',
  imports: [Header],
  templateUrl: './movie-details.html',
  styleUrl: './movie-details.scss',
})
export class MovieDetails implements OnInit {
  private movieService = inject(MovieService);
  
  movie = signal<any>(null);

  ngOnInit() {
    console.log(this.movieService.getSelectedMovie())
    this.movie.set(this.movieService.getSelectedMovie())
    console.log(this.movieService.getSelectedMovie())
  }
}
