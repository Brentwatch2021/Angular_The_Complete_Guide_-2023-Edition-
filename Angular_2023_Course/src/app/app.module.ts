import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { Assignment3Component } from './Basics Assignments/assignment3/assignment3.component';
import { Asssignment2Component } from './Basics Assignments/asssignment2/asssignment2.component';
import { Assignment1Component } from './Basics Assignments/assignment1/assignment1.component';
import { WarningAlertComponent } from './Basics Assignments/assignment1/warning-alert/warning-alert.component';
import { SuccessAlertComponent } from './Basics Assignments/assignment1/success-alert/success-alert.component';
import { GameControlComponent } from './Section5/game-control/game-control.component';
import { OddComponent } from './Section5/odd/odd.component';
import { EvenComponent } from './Section5/even/even.component';
import { MainGameComponent } from './Section5/main-game/main-game.component';
import { Section9mainComponent } from './Section9/section9main/section9main.component';
import { InactiveUsersComponent } from './Section9/inactive-users/inactive-users.component';
import { ActiveUsersComponent } from './Section9/active-users/active-users.component';



@NgModule({
  declarations: [
    AppComponent,
    Assignment3Component,
    Asssignment2Component,
    Assignment1Component,
    WarningAlertComponent,
    SuccessAlertComponent,
    GameControlComponent,
    OddComponent,
    EvenComponent,
    MainGameComponent,
    Section9mainComponent,
    InactiveUsersComponent,
    ActiveUsersComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
