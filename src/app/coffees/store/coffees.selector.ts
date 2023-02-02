import { createFeatureSelector } from "@ngrx/store";
import { Coffees } from "./coffees";

export const selectCoffees = createFeatureSelector<Coffees[]>('mycoffees');