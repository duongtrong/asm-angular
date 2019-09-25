import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable, of} from 'rxjs';
import {catchError, tap} from 'rxjs/operators';
import {Coin} from './coin';

@Injectable({
  providedIn: 'root'
})
export class CoinService {
  private baseUrl = 'http://localhost:8080/api/v1/coins';
  constructor(private httpClient: HttpClient) { }

  getCoinList(): Observable<any> {
    return this.httpClient.get(`${this.baseUrl}`);
  }

  getCoinName(name: string): Observable<any> {
    return this.httpClient.get(`${this.baseUrl}/${name}`).pipe(
      tap(_ => console.log(`fetch coin name = ${name}`)),
      catchError(this.handleError<Coin>(`getCoinName name = ${name}`)));
  }

  getCoinById(id: string): Observable<any> {
    return this.httpClient.get(`${this.baseUrl}/getById/${id}`).pipe(
      tap(_ => console.log(`fetch coin name = ${id}`)),
      catchError(this.handleError<Coin>(`getCoinById id = ${id}`)));
  }

  getCoinByMarketId(id: string): Observable<any> {
    return this.httpClient.get(`${this.baseUrl}/getByMarket/${id}`).pipe(
      tap(_ => console.log(`fetch market id = ${id}`)),
      catchError(this.handleError<Coin>(`get market find by id = ${id}`)));
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}
