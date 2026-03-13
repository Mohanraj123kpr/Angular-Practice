import { Component } from '@angular/core';
import { ReactiveFormsModule, FormControl} from '@angular/forms';

@Component({
  selector: 'app-reactive-forms',
  imports: [ReactiveFormsModule],
  templateUrl: './reactive-forms.html',
  styleUrl: './reactive-forms.scss',
})
export class ReactiveForms {
  name = new FormControl();

  updateName() {
    this.name.setValue("Mohan")
  }

}
