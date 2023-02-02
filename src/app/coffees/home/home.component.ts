import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { invokeCoffeesAPI } from '../store/coffees.action';
import { selectCoffees } from '../store/coffees.selector';
 
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  displayedColumns: string[] = ['id', 'blend_name', 'variety'];

  constructor(private store: Store) {}
  coffees$ = this.store.pipe(select(selectCoffees));

  ngOnInit(): void {
    this.store.dispatch(invokeCoffeesAPI());    
  }
}