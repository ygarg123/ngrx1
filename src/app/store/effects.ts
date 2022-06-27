import { Injectable } from '@angular/core';
import { createEffect, Actions, ofType } from '@ngrx/effects';
import { ApiService } from '../services/service';
import { Data, ApiError, ApiSuccess } from './actions';
import { switchMap, catchError, map, tap } from 'rxjs/operators';
import { of } from 'rxjs';

@Injectable()
export class RootEffects {
  getMockDataEffect$ = createEffect(() =>
    this.actions$.pipe(
      ofType(Data),
      tap(() => {
        console.log('new data');
      }),
      switchMap((action) =>
        this.mockApi.getService()
        .pipe(
          map((res) => ApiSuccess({ data: res })),

          tap((res) => {
            console.log(res);
          })
        )
      ),
      catchError((error) => of(ApiError({ error })))
    )
  );

  constructor(private actions$: Actions, private mockApi: ApiService) {}
}
