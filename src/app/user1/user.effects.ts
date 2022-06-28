import { Injectable } from '@angular/core';
import { createEffect, Actions, ofType } from '@ngrx/effects';
import { ApiService } from '../services/service';
import { Api, ApiDataError, ApiDataSuccess } from './user.action';
import { switchMap, catchError, map, tap } from 'rxjs/operators';
import { of } from 'rxjs';

@Injectable()
export class UserEffects {
  getMockDataEffect$ = createEffect(() =>
    this.actions$.pipe(
      ofType(Api),
      tap(() => {
        console.log('new data');
      }),
      switchMap((action) =>
        this.mockApi.getService()
        .pipe(
          map((res) => ApiDataSuccess({ data: res })),

          tap((res) => {
            console.log(res);
          })
        )
      ),
      catchError((error) => of(ApiDataError({ error })))
    )
  );

  constructor(private actions$: Actions, private mockApi: ApiService) {}
}
