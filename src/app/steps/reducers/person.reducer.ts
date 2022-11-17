import { Persons } from "../persons/persons.model";

export const PER_SEL = 'PER_SEL';

export function personReducer(state: Persons []= []  , action: any) {
  switch (action.type) {
    case PER_SEL:
        const vVal = [...state, action.payload];
        console.log(vVal);
        return vVal;

    default:
        return state;
    }
}
