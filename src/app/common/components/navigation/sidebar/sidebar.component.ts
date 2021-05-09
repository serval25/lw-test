import { Component, Input } from '@angular/core';
import * as tabsData from '@lwt-data/tabs.json';
import { TabDTO } from 'src/app/common/dtos/tabDTO';
import { Router } from '@angular/router';

@Component({
    selector: 'lwt-sidebar',
    styleUrls: ['./sidebar.component.scss'],
    templateUrl: './sidebar.component.html',
})
export class SidebarComponent {
    @Input() currentTabs: TabDTO[] = [];
     tabs = [
         {name: 'Inventory', link: 'lwt/inventory'},
         {name: 'Orders', link: 'lwt/orders'},
         {name: 'Shipping', link: 'lwt/shipping'},
     ];
    constructor(
        private router: Router,
    ) {}

    addTab(label: string, link: string) {
        if (this.currentTabs.some( tab => tab['label'] === label )) {
            this.router.navigate([link]);
        } else {
            this.currentTabs.push({
                label: label,
                link: link
            })
            this.router.navigate([link]);
        }
    }
}