import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'

import { AppComponent }  from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { CarouselComponent } from  './carousel/carousel.component';
import { ListboxComponent } from './listBox/listbox.component';

import { DashboardComponent } from './Dashboard/dashboard.component';
import { BuybackComponent } from './Buyback/buyback.component';

import { AppRoutingModule } from './app-routing.module';

@NgModule({
  imports:  [
      BrowserModule,
      AppRoutingModule,
      FormsModule
    ],
  declarations: [
    AppComponent ,
    NavbarComponent,
    CarouselComponent,
    ListboxComponent,
    DashboardComponent,
    BuybackComponent
  ],
  bootstrap:    [ AppComponent ]
})



export class AppModule {

}


