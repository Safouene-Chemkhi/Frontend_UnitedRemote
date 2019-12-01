import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';

import { API_URL } from 'src/environments/environment';


const oauthApiUrl = API_URL+'/users';
const loginApiUrl = API_URL+'/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  auth_token :string;
  constructor(private http: HttpClient) { }
  
  login(credentials){
    let headers = new HttpHeaders({ 'Content-Type': 'application/json'});
    return this.http.post(loginApiUrl, (credentials), {headers: headers})
  }

  register(user){
    console.log(JSON.stringify(user));
    let headers = new HttpHeaders({ 'Content-Type': 'application/json'});
    return this.http.post(oauthApiUrl, user, {headers: headers})
  }

  update(user){
    console.log('updating user');
    let headers = new HttpHeaders({ 'Content-Type': 'application/json', 'x-auth-token':localStorage.getItem('token')});
    return this.http.post(oauthApiUrl+'/'+user._id, user, {headers: headers})
    
  }

  logout(){
    localStorage.removeItem('token');
    localStorage.removeItem('user');
  }}
