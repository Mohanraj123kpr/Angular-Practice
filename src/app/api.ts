import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class Api {
  private httpClient = inject(HttpClient)

  fetchJobId(): Observable<any> {
    return this.httpClient.get<any>("https://hacker-news.firebaseio.com/v0/jobstories.json")
  }

  fetchJobList(jobId: string): Observable<any> {
    return this.httpClient.get<any>(`https://hacker-news.firebaseio.com/v0/item/${jobId}.json`)
  }
}
