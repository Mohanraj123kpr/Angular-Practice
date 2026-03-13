import { inject, Inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class Common {
  httpClient = inject(HttpClient);

  fetchJobIds(): Observable<any> {
    return this.httpClient.get('https://hacker-news.firebaseio.com/v0/jobstories.json');
  }

  fetchJobs(id: string): Observable<any> {
    return this.httpClient.get(`https://hacker-news.firebaseio.com/v0/item/${id}.json`);
  }

  fetchUsers() {
    return this.httpClient.get('https://jsonplaceholder.typicode.com/users');
  }
}
