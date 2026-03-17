import { Component, inject, signal } from '@angular/core';
import { Task, TaskService } from '../../task-service';
import { JsonPipe } from '@angular/common';
import { Header } from '../../Movies-Page/header/header';
import { ReactiveFormsModule, FormGroup, FormControl, Validators, FormsModule } from '@angular/forms';
import { Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';

@Component({
  selector: 'app-home',
  imports: [Header, ReactiveFormsModule, JsonPipe, FormsModule],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {
  private taskService = inject(TaskService)
  private searchSubject = new Subject<string>();
  private filterSubject = new Subject<void>();
  
  priority = signal<string[]>(['low','medium', 'high'])
  status = signal<string[]>(['in-progress','pending', 'completed'])
  editingTaskId = signal<string | null>(null)
  searchText = signal<string>('')
  selectedPriority = signal<string>('all')
  selectedStatus = signal<string>('all')
  taskForm = new FormGroup({
    title: new FormControl('', Validators.required),
    description: new FormControl('', Validators.required),
    priority: new FormControl('low', Validators.required),
    status: new FormControl('in-progress', Validators.required),
    dueDate: new FormControl('', Validators.required),
    tags: new FormControl('', Validators.required)
  })
  tasks = signal<Task[]>([])
  filteredTask =signal<Task[]>([])
  headerNavItems = signal<any>([
    { label: 'Home', route: "/"},
  ])

  ngOnInit() {
    this.taskService.fetchTasks().subscribe({
      next: (res: any) => {
        this.tasks.set(res.tasks)
        this.taskService.setTasks(res.tasks)
        this.filteredTask.set(res.tasks);
        console.log(this.tasks())
      }
    });

    // Setup debounced search
    this.searchSubject.pipe(
      debounceTime(300), // Wait 300ms after user stops typing
      distinctUntilChanged() // Only emit if value is different from previous
    ).subscribe(() => {
      this.applyFilters();
    });

    // Setup debounced filter
    this.filterSubject.pipe(
      debounceTime(200)
    ).subscribe(() => {
      this.applyFilters();
    });
  }

  addTask() {
    console.log(this.taskForm.value)
    if (this.taskForm.invalid) {
      return;
    }

    const formValue = this.taskForm.value;
    
    if (this.editingTaskId()) {
      // Update existing task
      const updatedTask: Task = {
        id: this.editingTaskId()!,
        createdAt: new Date(),
        title: formValue.title!,
        description: formValue.description!,
        priority: formValue.priority!,
        status: formValue.status!,
        dueDate: new Date(formValue.dueDate!),
        tags: formValue.tags ? formValue.tags.split(',').map(tag => tag.trim()) : []
      };
      
      this.taskService.updateTask(updatedTask);
      this.editingTaskId.set(null);
    } else {
      // Add new task
      const newTask: Task = {
        id: Date.now().toString(),
        createdAt: new Date(),
        title: formValue.title!,
        description: formValue.description!,
        priority: formValue.priority!,
        status: formValue.status!,
        dueDate: new Date(formValue.dueDate!),
        tags: formValue.tags ? formValue.tags.split(',').map(tag => tag.trim()) : []
      };
      
      this.taskService.addTask(newTask);
    }
    
    this.tasks.set(this.taskService.getTasks());
    this.taskForm.reset({
      priority: 'low',
      status: 'in progress'
    });
  }

  editTask(task: Task, event: Event) {
    event.preventDefault();
    console.log('Editing task:', task);
    this.editingTaskId.set(task.id);
    
    // Convert dueDate to proper format for date input
    let dueDateStr = '';
    if (task.dueDate) {
      const date = typeof task.dueDate === 'string' ? task.dueDate : task.dueDate.toISOString().split('T')[0];
      dueDateStr = date.split('T')[0]; // Ensure format is YYYY-MM-DD
    }
    
    this.taskForm.patchValue({
      title: task.title,
      description: task.description,
      priority: task.priority,
      status: task.status,
      dueDate: dueDateStr,
      tags: Array.isArray(task.tags) ? task.tags.join(', ') : task.tags
    });
    
    console.log('Form value after patch:', this.taskForm.value);
  }

  cancelEdit() {
    this.editingTaskId.set(null);
    this.taskForm.reset({
      priority: 'low',
      status: 'in progress'
    });
  }

  deleteTask(task: Task) {
    this.taskService.deleteTask(task)
    this.tasks.set(this.taskService.getTasks());
  }

  searchTasks() {
    // Emit search text to the subject instead of directly filtering
    this.searchSubject.next(this.searchText());
  }

  onFilterChange() {
    this.filterSubject.next();
  }

  private applyFilters() {
    let filteredData = [...this.tasks()];

    // Apply search filter
    const searchText = this.searchText().toLowerCase();
    if (searchText) {
      filteredData = filteredData.filter(task => {
        return task.title.toLowerCase().includes(searchText) || 
               task.description.toLowerCase().includes(searchText)
      });
    }

    // Apply priority filter
    if (this.selectedPriority() !== 'all') {
      filteredData = filteredData.filter(task => 
        task.priority === this.selectedPriority()
      );
    }

    // Apply status filter
    if (this.selectedStatus() !== 'all') {
      filteredData = filteredData.filter(task => 
        task.status === this.selectedStatus()
      );
    }

    this.filteredTask.set(filteredData);
  }
}
