import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTabsModule } from '@angular/material/tabs';
import { MatIconModule } from '@angular/material/icon';
import { CommonLayoutsModule } from './common/common-layouts.module';
import { MatSidenavModule } from '@angular/material/sidenav';

const materialModules = [
  MatIconModule,
  MatTabsModule,
  MatSidenavModule,
]

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonLayoutsModule,
    BrowserAnimationsModule,
    ...materialModules,
  ],
  exports: [
    ...materialModules,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
