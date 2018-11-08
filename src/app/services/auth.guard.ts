import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { Store } from '@ngxs/store';
import { AuthState } from '../states/auth.state';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor( private store: Store ){}

  canActivate() {
    const logged = this.store.selectSnapshot(AuthState.loggedIn);
    console.log(logged);
    
    return logged;
  }
}
