import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoffeesRoutingModule } from './coffees-routing.module';
import { HomeComponent } from './home/home.component';

import { StoreModule } from '@ngrx/store';
import { coffeeReducer } from './store/coffees.reducer';
import { CoffeesEffect } from './store/coffees.effect';
import { EffectsModule } from '@ngrx/effects';
import { AgGridModule } from 'ag-grid-angular';

@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    CoffeesRoutingModule,
    AgGridModule,
    StoreModule.forFeature('mycoffees',coffeeReducer),
    EffectsModule.forFeature([CoffeesEffect])
  ]
})

export class CoffeesModule { }
