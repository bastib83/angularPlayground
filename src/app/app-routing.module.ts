import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrderPageComponent } from './order-page/order-page.component';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { QueueEditComponent } from './queue-edit/queue-edit.component';

const routes: Routes = [
  { path: 'orders', component: OrderPageComponent },
  { path: 'queue', component: QueueEditComponent },
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
