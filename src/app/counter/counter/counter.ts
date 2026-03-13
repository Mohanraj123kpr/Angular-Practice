import { Component, computed, signal } from '@angular/core';

@Component({
  selector: 'app-counter',
  imports: [],
  templateUrl: './counter.html',
  styleUrl: './counter.scss',
})
export class Counter {
  firstName = signal("Mohan")
  ngOnInit() {
    this.firstName.set('raj')
    this.firstName.update(name =>  name)
    console.log(this.firstName())
  }

  firstNameCapitalized = computed(() => {
    return this.firstName().charAt(0).toUpperCase() + this.firstName().slice(1)
  })

}
