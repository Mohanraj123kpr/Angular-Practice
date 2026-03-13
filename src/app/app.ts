import { Component, inject, OnInit, signal } from '@angular/core';
import { Home } from './Movies-Page/home/home';
import { RouterOutlet } from '@angular/router';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrls: ['./app.scss']
})
export class App {

  divChange() {
    console.log("Div visibility changed");
  }
}