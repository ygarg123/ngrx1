import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { fromRoot } from './store';
import { Observable } from 'rxjs';
import { RootState } from './store/reducers';
import { getStateSelectedData } from './store/selectors';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  // error$: Observable<string> | undefined;
  data$: Observable<any>;

  constructor(private store: Store<RootState>) {}

  ngOnInit() {
    //this.store.select(fromRoot.getStateError)
    this.data$ = this.store.select(getStateSelectedData);
  }

  getData() {
    // this.store.dispatch(
    //   fromRoot.Data({ id: 'https://jsonplaceholder.typicode.com/users' })
    // );
    // this.store
    //   .select(fromRoot.getStateSelectedData)
    //   .subscribe((res) => console.log(res));
  }
}
