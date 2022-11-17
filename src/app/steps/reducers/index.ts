import { ActionReducerMap } from "@ngrx/store";
import { FormInfo } from "../form/form-info.model";
import { Persons } from "../persons/persons.model";
import { ImageSpec } from "../upload-img/upload-img.model";
import { formInfoReducer } from "./form-info.reducer";
import { personReducer } from "./person.reducer";
import { uploadImageReducer } from "./upload-image.reducer";

export interface AppStateSteps {
  imageSpecState: ImageSpec[];
  formInfoState: FormInfo[];
  personState: Persons[];
}

export const reducers : ActionReducerMap<AppStateSteps> = {
  imageSpecState: uploadImageReducer,
  formInfoState: formInfoReducer,
  personState: personReducer
}
