import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormComponent } from './steps/form/form.component';
import { PersonsComponent } from './steps/persons/persons.component';
import { StepsDisplayComponent } from './steps/steps-display/steps-display.component';
import { UploadImgComponent } from './steps/upload-img/upload-img.component';

const routes: Routes = [
  {path: 'upload-img', component: UploadImgComponent},
  {path: 'form', component: FormComponent},
  {path: 'steps-display', component: StepsDisplayComponent},
  {path: 'persons', component: PersonsComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
