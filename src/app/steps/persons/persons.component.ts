import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Persons } from './persons.model';
import { Store } from '@ngrx/store';
import { AppStatePerson } from 'src/app/app-state';

@Component({
  selector: 'fintranet-persons',
  templateUrl: './persons.component.html',
  styleUrls: ['./persons.component.scss']
})
export class PersonsComponent implements OnInit {
  personSelected!: Persons;
  click_saveToStore = false;
  persons: Persons [] = [
    {code: 1 , name: 'Ali', family: 'Ostadi', age: 32, job: 'Engineer'},
    {code: 2 , name: 'Reza', family: 'Ghomeishi', age: 45 , job: 'Administrative Officer'},
    {code: 3 , name: 'Moein', family: 'Veisi', age: 27 , job: 'Technical employee'},
    {code: 4 , name: 'Saeid', family: 'Bahari', age: 33 , job: 'Manager'},
    {code: 5 , name: 'Rahman', family: 'Ahmadi', age: 22 , job: 'Programer'},
  ]

  constructor(private router: Router, private store: Store<AppStatePerson>) { }

  ngOnInit(): void {
  }

  nextHandler() {
    this.router.navigate(['steps-display']);
  }

  backHandler() {
    this.router.navigate(['form']);
  }

  saveToStore(): void {
    this.click_saveToStore = true;
    this.store.dispatch({
      type: 'PER_SEL',
      payload: <Persons> {
        code: this.personSelected.code,
        name: this.personSelected.name,
        family: this.personSelected.family,
        age: this.personSelected.age,
        job: this.personSelected.job,
      }
    });
  }
}
