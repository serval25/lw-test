import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { InnerLayoutComponent } from "@lwt-layouts/inner-layout/inner-layout.component";
import { NavbarComponent } from "@lwt-navigation/navbar/navbar.component";
import { SidebarComponent } from "@lwt-navigation/sidebar/sidebar.component";
import { InventoryComponent } from "@lwt-tabs/inventory/inventory.component";
import { OrdersComponent } from '@lwt-tabs/orders/orders.component';
import { ShippingComponent } from '@lwt-tabs/shipping/shipping.component';
import { MatIconModule } from "@angular/material/icon";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTabsModule } from '@angular/material/tabs';
import { MatSidenavModule } from '@angular/material/sidenav';

@NgModule({
    imports: [CommonModule, RouterModule, MatTabsModule, MatIconModule, MatSidenavModule ],
    declarations: [
        InnerLayoutComponent, 
        InventoryComponent,
        OrdersComponent,
        ShippingComponent,
        NavbarComponent,
        SidebarComponent,
    ],
    exports: [
        InnerLayoutComponent, 
        NavbarComponent,
        SidebarComponent,
        MatIconModule,
        BrowserAnimationsModule,
        MatTabsModule,
        MatSidenavModule,
    ],
})

export class CommonLayoutsModule {}