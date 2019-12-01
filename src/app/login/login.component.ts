import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(public auth: AuthService) { }

  ngOnInit() {
  }

  form = new FormGroup({
    'email': new FormControl('', Validators.compose([Validators.required, Validators.email, Validators.minLength(8)])),
    'password': new FormControl('', Validators.compose([Validators.required, Validators.minLength(8)]))
  })

  get f() { return this.form.controls; }

  async login() {
    let credentials = {
      email: this.form.controls.email.value,
      password: this.form.controls.password.value
    };
    console.log(credentials);
    
    this.auth.login(credentials).subscribe(res => {
      console.log(res);
      let x: any = res;
      localStorage.setItem('token', x._token);
      localStorage.setItem('user', JSON.stringify(x.user));

    }, err  => {
      console.error(err);
    })
  }

}
