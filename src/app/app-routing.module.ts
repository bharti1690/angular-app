import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
        {
           path:'',
           loadChildren:()=>
                 import('./coffees/coffees.module').then((c)=>c.CoffeesModule),
        }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
