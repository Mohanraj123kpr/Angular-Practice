import { Component, inject } from '@angular/core';
import { Common } from '../services/common';
@Component({
  selector: 'app-html-example',
  imports: [],
  templateUrl: './html-example.html',
  styleUrl: './html-example.scss',
})
export class HtmlExample {
  users: any = []
  private commonService = inject(Common)
  ngOnInit() {
    this.commonService.fetchUsers().subscribe({
      next: (res) => {
        this.users = res
      }
    })
  }
}
