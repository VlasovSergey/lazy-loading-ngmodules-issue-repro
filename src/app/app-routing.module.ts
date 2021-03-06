import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const enum TestEnum {
  item = 'app/customers/customers.module#CustomersModule'
}

const routes: Routes = [
  {
    path: 'customers',
    loadChildren: TestEnum.item
  },
  {
    path: 'orders',
    loadChildren: 'app/orders/orders.module#OrdersModule'
  },
  {
    path: '',
    redirectTo: '',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule { }
