import { Component, OnInit } from '@angular/core';
import { AppState } from './store/state';
import { Store } from '@ngrx/store';
import { LoadUserRequestAction } from './store/actions';
import { User } from './store/types';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Unit Test App';
  user: User;
  constructor(
    public store: Store<AppState>,
  ) {}

  ngOnInit() {
    this.store.dispatch(new LoadUserRequestAction());
  }
}
