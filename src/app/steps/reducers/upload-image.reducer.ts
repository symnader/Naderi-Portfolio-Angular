import { ImageSpec } from "../upload-img/upload-img.model";

export const UPL_IMG = 'UPL_IMG';

export function uploadImageReducer(state: ImageSpec[]=[], action: any) {
  switch (action.type) {
    case UPL_IMG:
        return [...state, action.payload];
    default:
        return state;
    }
}
