import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { map, delay, tap } from 'rxjs/operators';
import { HttpClient } from "@angular/common/http";


@Injectable({ providedIn: 'root' })
export class ApiService {
  constructor(private http : HttpClient){
  }
  getDataFromId(id: string): Observable<any> {
    
    return of({ id: 0, data: '' }).pipe(
      map(item => ({ id, data: ' data from id: ' + id })),
      delay(1000)
    )
  }

  getApiError(): Observable<any> {
   
    return of(0).pipe(
      delay(1000),
      tap(() => {throw 'A random error'})
    )
  }

  getService(){
    return this.http.get('https://jsonplaceholder.typicode.com/users');
  }

} 