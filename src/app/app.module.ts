import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { StoreModule } from '@ngrx/store';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StepsComponent } from './steps/steps.component';
import { UploadImgComponent } from './steps/upload-img/upload-img.component';
import { FormComponent } from './steps/form/form.component';
import { StepsDisplayComponent } from './steps/steps-display/steps-display.component';
import { MessageService} from 'primeng/api';
import { PersonsComponent } from './steps/persons/persons.component';

// PrimeNg
import {AccordionModule} from 'primeng/accordion';
import {FileUploadModule} from 'primeng/fileupload';
import {InputTextModule} from 'primeng/inputtext';
import {CalendarModule} from 'primeng/calendar';
import {ListboxModule} from 'primeng/listbox';
import {InputTextareaModule} from 'primeng/inputtextarea';
import {DropdownModule} from 'primeng/dropdown';
import {ButtonModule} from 'primeng/button';
import {StepsModule} from 'primeng/steps';
import {MenuModule} from 'primeng/menu';
import {ToastModule} from 'primeng/toast';
import {TableModule} from 'primeng/table';
import { reducers } from './steps/reducers';

@NgModule({
  declarations: [
    AppComponent,
    StepsComponent,
    UploadImgComponent,
    FormComponent,
    StepsDisplayComponent,
    PersonsComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    // StoreModule.forRoot({blockchain: addCoinReducer}),
    // StoreModule.forRoot({appStateImageSpec: uploadImageReducer}),
    // StoreModule.forRoot({appStateFormInfo: formInfoReducer}),
    // StoreModule.forRoot({appStatePerson: personReducer}),
    // StoreModule.forFeature('stepsState', appReducerCombine),

    StoreModule.forRoot(reducers),
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,

    // PrimeNG
    AccordionModule,
    FileUploadModule,
    HttpClientModule,
    InputTextModule,
    CalendarModule,
    ListboxModule,
    InputTextareaModule,
    DropdownModule,
    ButtonModule,
    StepsModule,
    MenuModule,
    ToastModule,
    TableModule,
  ],
  providers: [MessageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
