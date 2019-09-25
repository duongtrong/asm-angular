import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import {catchError, tap} from 'rxjs/operators';
import {Coin} from '../coin/coin';

@Injectable({
  providedIn: 'root'
})
export class MarketService {
  private baseUrl = 'http://localhost:8080/api/v1/markets';
  constructor(private httpClient: HttpClient) { }

  getMarketList(): Observable<any> {
    console.log(this.baseUrl);
    return this.httpClient.get(`${this.baseUrl}`);
  }

  getMarketName(name: string): Observable<any> {
    return this.httpClient.get(`${this.baseUrl}/${name}`).pipe(
      tap(_ => console.log(`fetch market name = ${name}`)),
      catchError(this.handleError<Coin>(`getMarketName name = ${name}`)));
  }

  getMarketById(id: string): Observable<any> {
    return this.httpClient.get(`${this.baseUrl}/getById/${id}`).pipe(
      tap(_ => console.log(`fetch coin name = ${id}`)),
      catchError(this.handleError<Coin>(`getMarketById id = ${id}`)));
  }

  // tslint:disable-next-line:ban-types
  createMarket(market: Object): Observable<Object> {
    return this.httpClient.post(`${this.baseUrl}`, market);
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
