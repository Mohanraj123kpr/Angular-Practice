import { Component, inject, OnInit, signal } from '@angular/core';
import { Common } from '../services/common';
import { MatCardModule } from '@angular/material/card';
import { firstValueFrom, forkJoin } from 'rxjs';
import { DatePipe } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
@Component({
  selector: 'app-job-board',
  imports: [MatCardModule, DatePipe, MatButtonModule],
  templateUrl: './job-board.html',
  styleUrl: './job-board.scss',
})
export class JobBoard implements OnInit {
  commonService = inject(Common)
  jobIds: any[] = []
  jobs = signal<any[]>([])
  
  async fetchJobs(index: number) {
    try {
      if (this.jobIds.length === 0) {
        this.jobIds = await firstValueFrom(this.commonService.fetchJobIds());
      }
      
      const jobRequests = [];
      for(let i = index; i < index + 5 && i < this.jobIds.length; i++) {
        jobRequests.push(this.commonService.fetchJobs(this.jobIds[i]));
      }
      
      forkJoin(jobRequests).subscribe({
        next: (results: any) => {
          this.jobs.update(current => [...current, ...results])
          console.log(this.jobs(), "jobs")
        },
        error: (error) => {
          console.log(error, "error iss")
        }
      })
    } catch (error) {
      console.log(error, "error iss")
    }
  }
  
  ngOnInit() {
    this.fetchJobs(0)
  }

  loadMore() {
    this.fetchJobs(this.jobs().length)
  }
}
