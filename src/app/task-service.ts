import { inject, Injectable, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { of } from 'rxjs';

export interface Task {
  id: string;
  title: string;
  description: string;
  priority: string;
  status: string;
  dueDate: Date;
  createdAt: Date;
  tags: string[];
}

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  private httpClient = inject(HttpClient);
  tasks = signal<Task[]>([]);

  fetchTasks() {
    return this.httpClient.get('assets/tasks.json')
  }

  getTasks() {
    return this.tasks()
  }
  
  setTasks(tasks: Task[]) {
    this.tasks.set(tasks)
  }

  addTask(task: Task) {
    const newTask = [...this.tasks()]
    newTask.push(task)
    this.tasks.set(newTask)
  }

  updateTask(task: Task) {
    const tasks = this.tasks().map(t => 
      t.id === task.id ? task : t
    );
    this.tasks.set(tasks);
  }

  deleteTask(task: Task) {
    let tasks = [...this.tasks()]
    tasks = tasks.filter(t => t.id != task.id)
    this.tasks.set(tasks)
  }
}
