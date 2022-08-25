import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { TickersService } from '../services/tickers.service';
import { Ticker } from '../ticker/ticker.component';

@Component({
  selector: 'app-tickers',
  templateUrl: './tickers.component.html',
  styleUrls: ['./tickers.component.css']
})
export class TickersComponent implements OnInit {
  tickers!: Observable<Array<Ticker>>;

  constructor(private tickerservice: TickersService) { }

  ngOnInit(): void {
    this.tickers = this.tickerservice.getTickers();
  }

}
