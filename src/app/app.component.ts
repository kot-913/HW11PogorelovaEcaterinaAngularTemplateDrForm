import { Component } from '@angular/core';

export class Person {
  constructor(public name: string, public age: string, public email: string) {}
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  name: string = '';
  age: string = '';
  email: string = '';

  persons: Person[] = [];

  addItem() {
    this.persons.push(new Person(this.name, this.age, this.email));
    this.name = '';
    this.age = '';
    this.email = '';
  }
}
