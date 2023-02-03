import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { invokeCoffeesAPI } from '../store/coffees.action';
import { selectCoffees } from '../store/coffees.selector';
import { ColDef } from 'ag-grid-community'; 

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {

  columnDefs: ColDef[] = [
    { field: 'id' },
    { field: 'blend_name' },
    { field: 'variety' },
    { field: 'origin' },
    { field: 'intensifier' },
    { field: 'notes' },
 ];

  private gridApi:any;
  gridColumnApi: any;
  pageSize = 8;

  constructor(private store: Store) {}
  coffees$ = this.store.pipe(select(selectCoffees));

  ngOnInit(): void {
    this.store.dispatch(invokeCoffeesAPI());  
  }

  onGridReady(params: any) {
    this.gridApi = params.api;
    this.gridColumnApi = params.columnApi;
  }

}