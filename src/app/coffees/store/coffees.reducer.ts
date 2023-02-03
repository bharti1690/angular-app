import { createReducer, on } from "@ngrx/store";
import { Coffees } from "./coffees";
import { coffeesFetchAPISuccess } from "./coffees.action";

export const initialState : ReadonlyArray<Coffees>=[];

export const coffeeReducer = createReducer(
    initialState,
    on(coffeesFetchAPISuccess,(state,{allCoffees})=>{
        return allCoffees;
    })
);