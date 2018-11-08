import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngxs/store';
import { Actions } from '@ngxs/store';
import { AuthState } from './states/auth.state';
import { Navigate } from '@ngxs/router-plugin';
import { Logout } from './actions/auth.actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'simpleRouting';

  constructor( private actions: Actions, private store: Store) {}

  ngOnInit(): void { 
    console.log('oninit');
       
    const logged = this.store.selectSnapshot(AuthState.loggedIn);
    if( !logged ) {
      this.store.dispatch( new Navigate(['/login']));
    } 
  }

  logout() {
    this.store.dispatch( new Logout());
  }

}
