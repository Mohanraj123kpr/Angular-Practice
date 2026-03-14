import { Component } from '@angular/core';
import { ReactiveFormsModule, FormGroup, FormControl, Validators, FormsModule } from '@angular/forms';
import { JobBoard } from '../../job-board/job-board';
import { TabsContent } from "../../tabs-content/tabs-content";
@Component({
  selector: 'app-table-example',
  imports: [ReactiveFormsModule, FormsModule, JobBoard, TabsContent],
  templateUrl: './table-example.html',
  styleUrl: './table-example.scss',
})
export class TableExample {
  searchText: string = '';
  inputText: string = '';
  tasks = [
    { id: 1, name: "Walk the dog"},
    { id: 2, name: "Water the plants"},
    { id: 3, name: "Wash the dishes"}
  ]
  userForm = new FormGroup({
    name: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]),
    age: new FormControl(null, [Validators.required])
  })
  taskForm = new FormGroup({
    name: new FormControl('',Validators.required)
  })
  columns: any = [
    { field: 'name', header: 'Name' },
    { field: 'email', header: 'Email' },
    { field: 'age', header: 'Age' },
  ]
  users: any = [
    {id: 1, name: "mohan", email: "mohanraj@2002kpr@gmail.com", age: 18},
    {id: 2, name: "raj", email: "raj@2002kpr@gmail.com", age: 18},
    {id: 3, name: "sheik", email: "sheik@2002kpr@gmail.com", age: 23},
  ]
  tabsDetails: any = [
    { 
      name: "first", 
      content: "The HyperText Markup Language or HTML is the standard markup language for documents designed to be displayed in a web browser."
    },
    { 
      name: "second", 
      content: "Cascading Style Sheets is a style sheet language used for describing the presentation of a document written in a markup language such as HTML or XML."
    },
    { 
      name: "third", 
      content: "JavaScript, often abbreviated as JS, is a programming language that is one of the core technologies of the World Wide Web, alongside HTML and CSS."
    },
  ]
  onSubmit() {
    console.log('form submitted', this.userForm.value)
    if(this.userForm.valid) {
      const newRow = {
      id : Date.now(),
      name: this.userForm.value.name || '',
      email: this.userForm.value.email || '',
      age: this.userForm.value.age || 0
    }
    this.users.push(newRow)
    this.userForm.reset()
    }

  }
  deleteRow(id: string | number) {
    this.users = this.users.filter((user: any) => user.id != id)
  }

  get filteredUsers() {
    return this.users.filter((user: any) => user.name.includes(this.searchText) || user.email.includes(this.searchText) )
  }

  submit() {
    this.tasks.push({
      id: this.tasks.length + 1,
      name: this.taskForm.value.name as string
    })
    this.taskForm.reset()
  }

  deleteTask(id: number) {
    this.tasks = this.tasks.filter(task => task.id !== id)
  }
}
