import { createAction,props } from "@ngrx/store";
import { Coffees } from "./coffees";

export const invokeCoffeesAPI = createAction(
    '[Coffees API] Invoke Coffees Fetch API'
);

export const coffeesFetchAPISuccess = createAction(
    '[Coffees API] Invoke Coffees Fetch API Success',
    props<{ allCoffees:Coffees[]}>()
);

