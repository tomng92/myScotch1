import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule }   from '@angular/router';

import { AppComponent } from './app.component';
import { MytabComponent } from './mytab/mytab.component';
import { CustomerComponent } from './customer/customer.component';
import { NavComponent } from './nav/nav.component';

@NgModule({
  declarations: [
    AppComponent,
    MytabComponent,
    CustomerComponent,
    NavComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    RouterModule.forRoot([
      {   path: 'bankAccount', component: CustomerComponent },
      {   path: 'client', component: AppComponent },

    ])
  ],

  providers: [],

  // bootstrap: [CustomerComponent, AppComponent, MytabComponent]
  bootstrap: [MytabComponent]
})
export class AppModule { }
