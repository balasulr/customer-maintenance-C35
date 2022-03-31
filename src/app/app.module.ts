import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; // For 2 way binding

import { AppComponent } from './app.component';
import { CustomerListComponent } from './customer-list/customer-list.component';

@NgModule({
  declarations: [
    AppComponent,
    CustomerListComponent
  ],
  imports: [
    BrowserModule, FormsModule // From above
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
