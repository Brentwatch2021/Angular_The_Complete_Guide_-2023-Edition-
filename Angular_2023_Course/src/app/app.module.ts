import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { Assignment3Component } from './Basics Assignments/assignment3/assignment3.component';
import { Asssignment2Component } from './Basics Assignments/asssignment2/asssignment2.component';
import { Assignment1Component } from './Basics Assignments/assignment1/assignment1.component';
import { WarningAlertComponent } from './Basics Assignments/assignment1/warning-alert/warning-alert.component';
import { SuccessAlertComponent } from './Basics Assignments/assignment1/success-alert/success-alert.component';

@NgModule({
  declarations: [
    AppComponent,
    Assignment3Component,
    Asssignment2Component,
    Assignment1Component,
    WarningAlertComponent,
    SuccessAlertComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
