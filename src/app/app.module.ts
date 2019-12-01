import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      { path : '', component : LoginComponent },
      { path : 'home', component : HomeComponent},
      { path : 'login', component:LoginComponent},
      { path : 'signup', component:SignupComponent}
    ])

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
