import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { FormInfo } from '../form/form-info.model';
import { Persons } from '../persons/persons.model';
import { AppStateSteps } from '../reducers';
import { ImageSpec } from '../upload-img/upload-img.model';


@Component({
  selector: 'fintranet-steps-display',
  templateUrl: './steps-display.component.html',
  styleUrls: ['./steps-display.component.scss']
})
export class StepsDisplayComponent implements OnInit {
  uplImage: Observable<ImageSpec[]>;
  formInfo: Observable<FormInfo[]>;
  persons: Observable<Persons[]>;

  constructor(private storeUpload: Store<AppStateSteps>,
              private storeForm: Store<AppStateSteps>,
              private storePerson: Store<AppStateSteps>
  ) {
    this.uplImage = this.storeUpload.select(state => state.imageSpecState)
    this.formInfo = this.storeForm.select(state => state.formInfoState)
    this.persons = this.storePerson.select(state => state.personState)
  }

  ngOnInit(): void { }

}
