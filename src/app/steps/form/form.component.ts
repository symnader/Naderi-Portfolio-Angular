import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { AppStateFormInfo } from 'src/app/app-state';
import { FormInfo, Status } from './form-info.model';

@Component({
  selector: 'fintranet-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})

export class FormComponent implements OnInit {
  angForm: any;
  click_saveToStore = false;
  status: Status[] = [
    {id: 1, name: 'New York'},
    {id: 2, name: 'Rome'},
    {id: 3, name: 'London'},
    {id: 4, name: 'Istanbul'},
    {id: 5, name: 'Paris'}
  ]

  constructor(private router: Router,
              private store: Store<AppStateFormInfo>,
              private fb: FormBuilder) { }

  ngOnInit(): void {
    this.createForm();
  }

  createForm() {
    this.angForm = this.fb.group({
      price : ['', Validators.required],
      rangeDate: ['', Validators.required],
      city: [''],
      letters: ['']
   });
  }

  nextHandler() {
    // this.router.navigate(['steps-display']);
    this.router.navigate(['persons']);
  }

  backHandler() {
    this.router.navigate(['upload-img']);
  }

  saveToStore(): void {
    this.click_saveToStore = true;
    this.store.dispatch({
      type: 'FRM_INFO',
      payload: <FormInfo> {
        price: this.angForm.get('price').value ,
        rangeDate: this.angForm.get('rangeDate').value,
        city: this.angForm.get('city').value,
        letters: this.angForm.get('letters').value,
      }
    });
  }

}

/*
      payload: <FormInfo> {
        price: this.angForm.get('price').value ,
        rangeDate: this.angForm.get('rangeDate').value,
        cityId: this.angForm.get('city').value,
        letters: this.angForm.get('letters').value,
      }
*/
