import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { RestaurantFormComponent } from './Restaurant/components/restaurant-form/restaurant-form.component';
import { RestaurantTableComponent } from './Restaurant/components/restaurant-table/restaurant-table.component';
import { RestaurantSmartComponentComponent } from './Restaurant/pages/restaurant-smart-component/restaurant-smart-component.component';
import {HttpClientModule} from "@angular/common/http";
import {RestaurantService} from "./Restaurant/services/restaurant.service";
import {RouterModule} from "@angular/router";
import {FormsModule} from "@angular/forms";
import {AppRoutingModule} from "./app-routing.module";
import { EvaluationFormComponent } from './Restaurant/components/evaluation-form/evaluation-form.component';


@NgModule({
  declarations: [
    AppComponent,
    RestaurantFormComponent,
    RestaurantTableComponent,
    RestaurantSmartComponentComponent,
    EvaluationFormComponent

  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule,
    FormsModule,
    AppRoutingModule


  ],
  providers: [RestaurantService],
  bootstrap: [AppComponent]
})
export class AppModule { }
