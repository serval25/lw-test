import { Component, Input } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { TabDTO } from 'src/app/common/dtos/tabDTO';

@Component({
    selector: 'lwt-navbar',
    styleUrls: ['./navbar.component.scss'],
    templateUrl: './navbar.component.html',
})

export class NavbarComponent {
    @Input() tabs: TabDTO[] = [];

    constructor() {}

    removeTab(index: number){
        this.tabs.splice(index, 1);
    }
}