import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './cart/cart.component';
import { OrderComponent } from './order.component';

const routes: Routes = [
  {path:'', component: OrderComponent,
  // {path:'cart', component: CartComponent},
  children:[
    {path:'cart', component: CartComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OrderRoutingModule { }
