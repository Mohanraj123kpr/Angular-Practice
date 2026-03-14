import { Component, input } from '@angular/core';
import { RouterLink } from '@angular/router';

interface NavItem {
  label: string;
  route: string;
}

@Component({
  selector: 'app-header',
  imports: [RouterLink],
  templateUrl: './header.html',
  styleUrl: './header.scss',
})
export class Header {
  navItems = input<NavItem[]>([
    { label: 'Home', route: "/"},
    { label: 'Cart', route: "/cart"},
    { label: 'Details', route: '/details'}
  ]);
}
