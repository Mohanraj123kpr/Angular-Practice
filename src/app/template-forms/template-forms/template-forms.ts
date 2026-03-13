import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { JsonPipe } from '@angular/common';
import { Actor } from './actor';
@Component({
  selector: 'app-template-forms',
  imports: [FormsModule, JsonPipe],
  templateUrl: './template-forms.html',
  styleUrl: './template-forms.scss',
})
export class TemplateForms {
  skills = ['Method Acting', 'Singing', 'Dancing', 'Swordfighting'];
  model = new Actor(18, 'Tom Cruise', this.skills[3], 'CW Productions');
  submitted = false;
  
  onSubmit() {
    this.submitted = true;
  }
  
  newActor() {
    this.model = new Actor(42, '', '');
  }
}
