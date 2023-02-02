import { createAction, props } from "@ngrx/store";
import { AppState } from "./appstate";
 
export const setAPIStatus = createAction(
    '[API] success or failure status',
    props<{apiStatus: AppState}>()
);