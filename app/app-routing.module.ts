/**
 * Created by JPTBB68 on 12/01/2017.
 */

import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { DashboardComponent } from "./Dashboard/dashboard.component";
import { BuybackComponent } from "./Buyback/buyback.component";


const routes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full' },
  {
    path: 'home',
    component: DashboardComponent
  },
  {
    path: 'buyback',
    component: BuybackComponent
  }
  ];


@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
