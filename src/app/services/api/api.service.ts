import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

import { Zodiac } from 'src/app/interfaces/zodiac';
import { time } from 'console';
import { Data } from 'ws';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private httpClient: HttpClient) {}

  searchZodiacByDate(id:number): Observable<Zodiac[]>{
    let headers: HttpHeaders = new HttpHeaders();
    headers = headers.append('Accept', 'application/json');
    return this.httpClient.get(
      'http://localhost:3000/zodiac/2' , 
       {headers: headers}
      ).pipe(
           map((data: Zodiac[]) => {
             return data;
           }), catchError( error => {
             return throwError( 'zodiac not found!' );
           })
        )
    }
}