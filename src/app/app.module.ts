import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomepageComponent } from './homepage/homepage.component';
import { DashboardpageComponent } from './dashboardpage/dashboardpage.component';
import { AdminpageComponent } from './adminpage/adminpage.component';

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    DashboardpageComponent,
    AdminpageComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
