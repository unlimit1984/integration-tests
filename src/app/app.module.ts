import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {VoterComponent} from './1-voter/voter.component';
import { GreeterComponent } from './greeter/greeter.component';

@NgModule({
  declarations: [
    AppComponent,
    VoterComponent,
    GreeterComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
