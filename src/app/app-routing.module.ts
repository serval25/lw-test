import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InnerLayoutComponent } from '@lwt-layouts/inner-layout/inner-layout.component';
import { InventoryComponent } from '@lwt-tabs/inventory/inventory.component';
import { OrdersComponent } from '@lwt-tabs/orders/orders.component';
import { ShippingComponent } from '@lwt-tabs/shipping/shipping.component';

const routes: Routes = [
  {
    path: 'lwt',
    component: InnerLayoutComponent,
    children: [
      {
        path: '',
        redirectTo:'inventory',
        pathMatch: 'full',
      },
      {
        path: 'inventory',
        component: InventoryComponent,
      },
      {
        path: 'orders',
        component: OrdersComponent,
      },
      {
        path: 'shipping',
        component: ShippingComponent,
      },
      { 
        path: '**', 
        redirectTo: 'inventory' 
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy'})],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule { }
