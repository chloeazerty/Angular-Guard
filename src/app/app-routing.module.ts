import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminpageComponent } from './adminpage/adminpage.component';
import { DashboardpageComponent } from './dashboardpage/dashboardpage.component';
import { HomepageComponent } from './homepage/homepage.component';
import { IsAdminGuard } from './is-admin.guard';
import { IsConnectedGuard } from './is-connected.guard';

const ROUTES: Routes = [
  { path: 'home', component: HomepageComponent },

  { path: 'admin', component: AdminpageComponent, canActivate: [IsAdminGuard], data:{
    expectedRoles: ['admin']
  } },

  { path: 'dashboard', component: DashboardpageComponent, canActivate: [IsConnectedGuard, IsAdminGuard], data:{
    rexpectedRoles: ['admin', 'user'] }},

];

@NgModule({
  imports: [RouterModule.forRoot(ROUTES)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
