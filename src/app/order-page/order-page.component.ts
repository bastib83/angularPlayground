import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { OrderPublicService } from '../services/order-public.service';
import { OrderService, Pizza } from '../services/order.service';

@Component({
  selector: 'app-order-page',
  templateUrl: './order-page.component.html',
  styleUrls: ['./order-page.component.css'],
  providers: [
    { provide: OrderService, useClass: OrderPublicService }
  ]
})
export class OrderPageComponent implements OnInit, OnDestroy {
  pizzas: Pizza[];

  message: string;
  subscription: Subscription;

  constructor(private orderService: OrderService) { }

  ngOnInit() {
    this.pizzas = this.orderService.getPizzas();
    console.log(this.pizzas);
    this.subscription = this.orderService.currentMessage.subscribe(message => this.message = message)
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  orderPizza(pizza: Pizza) {
    console.log('order-page.component.ts will load service function with following object:', pizza);
    this.orderService.orderPizza(pizza);
  }

}
