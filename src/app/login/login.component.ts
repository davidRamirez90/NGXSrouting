import { Component, OnInit } from '@angular/core';
import { Store } from '@ngxs/store';
import { Login } from '../actions/auth.actions';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private store: Store) { }


  ngOnInit() {
  }

  login(user, pass, remember) {
    this.store.dispatch( new Login({
      "user": user,
      "pass": pass,
      "remember": remember
    }) )
    
  }

}
