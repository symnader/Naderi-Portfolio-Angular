import { FormInfo } from './steps/form/form-info.model';
import { Persons } from './steps/persons/persons.model';
import { ImageSpec, UploadImg } from './steps/upload-img/upload-img.model';

export interface AppStateImageSpec {
   appStateImageSpec: ImageSpec[];
}

export interface AppStateFormInfo {
   appStateFormInfo: FormInfo[];
}

export interface AppStatePerson {
   appStatePerson: Persons[];
}
