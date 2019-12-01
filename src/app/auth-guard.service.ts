import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot } from '@angular/router';
import { CanActivate } from '@angular/router';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService  implements CanActivate {

  constructor(public router : Router) { }

  canActivate(route: ActivatedRouteSnapshot): boolean {

    console.log(route);

    let authInfo = {
      authenticated: localStorage.getItem('token')
    };

    if (!authInfo.authenticated) {
      this.router.navigateByUrl('/login');
      return false;
    }

    return true;

  }

}
