import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { VoterComponent } from './1-voter/voter.component';
import { GreeterComponent } from './greeter/greeter.component';
import { TodosComponent } from './2-todos/todos.component';
import { UserDetailsComponent } from "./3-user-details/user-details.component";
import { HomeComponent } from "./home/home.component";
import { UsersComponent } from "./users/users.component";
import { RouterModule } from "@angular/router";
import { routes } from "./app.routes";
import { NavComponent } from './nav/nav.component';

@NgModule({
  declarations: [
    AppComponent,
    VoterComponent,
    GreeterComponent,
    TodosComponent,
    UserDetailsComponent,
    HomeComponent,
    UsersComponent,
    NavComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
