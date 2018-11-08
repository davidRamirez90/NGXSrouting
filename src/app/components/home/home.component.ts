import { Component, OnInit } from '@angular/core';
import { Select, Store } from '@ngxs/store';
import { AuthState } from 'src/app/states/auth.state';
import { Observable } from 'rxjs';
import { AuthStateModel } from 'src/app/models/proyect.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  user;

  constructor(private store: Store) { }

  ngOnInit() {
    this.store.select( state => state )
      .subscribe(status => {
        console.log(status);
        this.user = status.auth;
      })
    
  }

}
