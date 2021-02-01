import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { OrderPublicService } from '../services/order-public.service';
import { OrderService, Pizza } from '../services/order.service';

@Component({
  selector: 'app-queue-edit',
  templateUrl: './queue-edit.component.html',
  styleUrls: ['./queue-edit.component.css'],
  providers: [
    { provide: OrderService, useClass: OrderPublicService }
  ]
})
export class QueueEditComponent implements OnInit, OnDestroy {
  @Input() pizzas = [];

  message:string;
  subscription: Subscription;

  constructor(private orderService: OrderService) { }

  ngOnInit() {
    this.subscription = this.orderService.currentMessage.subscribe(message => this.message = message)
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  newMessage() {
    this.orderService.changeMessage("Hello from Sibling");
  }

  changeMessage(message: string) {
    console.log('queue-edit.component change');
    this.orderService.changeMessage(message);
  }

  selectPizza(pizza: Pizza) {
    console.log('selectPizza:', pizza)
  }

  completePizza(id: number) {
    console.log('Pizza', id, 'fertiggestellt.');
  }

}
