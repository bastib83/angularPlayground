import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export interface Pizza {
  id: number;
  name: string;
  description: string;
  done: boolean;
}

@Injectable({
  providedIn: 'root'
})
export abstract class OrderService {

  constructor() { }

  abstract getPizzas(): Pizza[];

  abstract getPizzaOrders(): Pizza[];

  abstract orderPizza(pizza: Pizza);

  currentMessage;
  
  abstract changeMessage(message: string);

}
