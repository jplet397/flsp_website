import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes} from '@angular/router';

import { AppComponent }  from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { CarouselComponent } from  './carousel/carousel.component';
import { ListboxComponent } from './listBox/listbox.component';



@NgModule({
  imports:      [ BrowserModule ],
  declarations: [
    AppComponent ,
    NavbarComponent,
    CarouselComponent,
    ListboxComponent
  ],
  bootstrap:    [ AppComponent ]
})



export class AppModule {

}


