import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { PendingService } from '@lwt-services/pending.service';
import { Observable, Subscription } from 'rxjs';

import * as tabsData from '@lwt-data/tabs.json';

@Component({
  selector: 'lwt-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  public tabs: any[] = tabsData.tabs;
  constructor(private router: Router) {

  }
  ngOnInit(): void {
  }

  addTab() {

  }
}