import { DefaultTitleStrategy } from "@angular/router";
import { FormInfo } from "../form/form-info.model";

export const FRM_INFO = 'FRM_INFO';

export function formInfoReducer(state: FormInfo[] = [], action: any) {
  switch (action.type) {
    case FRM_INFO:
        const vVal = [...state, action.payload];
        console.log(vVal);
        return vVal;

    default:
        return state;
    }
}
