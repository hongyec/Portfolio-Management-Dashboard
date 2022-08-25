import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-ticker',
  templateUrl: './ticker.component.html',
  styleUrls: ['./ticker.component.css']
})
export class TickerComponent implements OnInit {
  @Input()
  ticker!: Ticker;
  imageUrl!: String

  ngOnInit(): void {
    this.imageUrl = `assets/${this.ticker.tickerSymbol}.png`;
    console.log(this.imageUrl)
  }
}


//{"id":1,"companyName":"APPLE","tickerSymbol":"APPL","price":163,"timezone":"EST"}
export class Ticker{
  id: number;
  companyName:string;
  tickerSymbol: string;
  price: number;
  timezone: string;

  constructor(
    id: number,
    companyName: string,
    tickerSymbol: string,
    price: number,
    timezone: string
  ) {
    this.id = id;
    this.companyName = companyName;
    this.tickerSymbol = tickerSymbol;
    this.price = price;
    this.timezone = timezone;
  }
}
