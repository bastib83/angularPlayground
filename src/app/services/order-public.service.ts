import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { OrderService, Pizza } from './order.service';

@Injectable({
  providedIn: 'root'
})
export class OrderPublicService implements OrderService {

  pizzaOrders: Pizza[] = [];

  getPizzaOrders(): Pizza[] { 
    const pizzas: Pizza[] = [];

    return pizzas;
  };

  constructor() { }

  getPizzas(): Pizza[] {
    const pizzas: Pizza[] = [
      {
        id: 1,
        name: 'Pizza Magarita',
        description: 'Nur mit Käse',
        done: false,
      },
      {
        id: 2,
        name: 'Pizza Salami',
        description: 'Mit Käse und Salami',
        done: false,
      },
      {
        id: 3,
        name: 'Pizza Magarita',
        description: 'Mit Käse und Schinken',
        done: false,
      }
    ];
    return pizzas;
  };


  orderPizza(pizza: Pizza) {
    console.log('Bestelle Pizza mit ID:', pizza);
    this.pizzaOrders.push(pizza);
    console.log('BestellListe:', this.pizzaOrders);
  }

  protected messageSource = new BehaviorSubject('default message');
  currentMessage = this.messageSource.asObservable();

  changeMessage(message: string) {
    console.log('change message:', message);
    this.messageSource.next(message);
  }

}
