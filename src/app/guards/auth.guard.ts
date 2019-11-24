import { Injectable } from '@angular/core';
import { Router, CanActivate, RouterStateSnapshot, ActivatedRouteSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { take, map, tap } from 'rxjs/operators';
import * as firebase from 'firebase/app';
import { AuthService } from '../auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {

  constructor(
    private router: Router,
    private auth: AuthService
  ) { }

  async canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ) {
    const idToken = await this.auth.getToken();
    if (!idToken) {
      this.router.navigate(['/login'], { queryParams: { 'redirectURL': state.url } });
      return false;
    }
    return true;
  }
}
