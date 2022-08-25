import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Ticker } from '../ticker/ticker.component';

@Injectable({
  providedIn: 'root'
})
export class TickersService {

  private baseUrl = "http://localhost:8081/tickers";

  constructor(private http: HttpClient) {}

  getTickers(): Observable<Array<Ticker>> {
    return this.http.get(this.baseUrl) as Observable<Array<Ticker>>;
  }
}
