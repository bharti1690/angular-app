import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import {select,Store} from '@ngrx/store';
import { EMPTY, map,mergeMap,withLatestFrom } from "rxjs";
import { CoffeesService } from "../coffees.service";
import { coffeesFetchAPISuccess,invokeCoffeesAPI } from "./coffees.action";
import { selectCoffees } from "./coffees.selector";


@Injectable()
export class CoffeesEffect {
    constructor(
        private actions$ : Actions,
        private coffeesService : CoffeesService,
        private store: Store
    ){}

    loadAllCoffee$ = createEffect(() =>
        this.actions$.pipe(
            ofType(invokeCoffeesAPI),
            withLatestFrom(this.store.pipe(select(selectCoffees))),
            mergeMap(([,coffeeFormStore])=>{
                if(coffeeFormStore.length>0){
                    return EMPTY;
                }
                return this.coffeesService
                .get()
                .pipe(map((data)=> coffeesFetchAPISuccess({allCoffees:data})));
            })
        )
    )
}
