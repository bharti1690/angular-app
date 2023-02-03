import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Coffees } from './store/coffees';

@Injectable({
  providedIn: 'root'
})
export class CoffeesService {

  constructor(private http : HttpClient) { }

  get(){
    return this.http.get<Coffees[]>('https://random-data-api.com/api/coffee/random_coffee?size=50');
  }
}
