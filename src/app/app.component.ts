import { Component, OnInit } from '@angular/core';
import { AuthService } from './auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'app';
  authenticated : boolean = false;
  constructor(public auth: AuthService, public router : Router){

  }
  ngOnInit(){
    if (localStorage.getItem('token')){
      this.authenticated = true;
    }
  }
  logout(){
    this.auth.logout();
    this.router.navigateByUrl('/login');

  }
}
