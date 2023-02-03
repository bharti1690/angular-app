import { Actions } from '@ngrx/effects/src/actions';
import { CoffeesEffect } from './coffees.effect';

let actions$: Actions;

beforeEach(() => {
  actions$ = new Actions();
});

it('should create an instance', () => {
  const effect = new CoffeesEffect(actions$);
  expect(effect).toBeTruthy();
});