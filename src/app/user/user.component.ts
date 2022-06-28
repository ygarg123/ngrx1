import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { fromUser } from '../user1/user.index';
import { Observable } from 'rxjs';
import { getSelectedData } from '../user1/user.selectors';
import { RootState } from '../store/reducers';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
})
export class UserComponent implements OnInit {
  // error$: Observable<string> | undefined;
  data$: Observable<any>;

  constructor(private store: Store<RootState>) {}

  ngOnInit() {
    this.store.dispatch(
      fromUser.Api({ id: 'https://jsonplaceholder.typicode.com/users' })
    );
    //this.store.select(fromRoot.getStateError)
    this.data$ = this.store.select(getSelectedData);
  }

  
}
