import { Component, Input, OnInit } from '@angular/core';
import { Order } from '../orders/orders.component';
import { Ticker } from '../ticker/ticker.component';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})

export class OrderComponent implements OnInit {

  @Input()
  order!: Order;

  tickerName: string[] = [];

  constructor() {
    this.tickerName.push("APPL");
    this.tickerName.push("GOOGL");
    this.tickerName.push("AMZN");
    this.tickerName.push("CITI");
    this.tickerName.push("META");
    this.tickerName.push("COIN");
  }

  ngOnInit(): void {
  }

}
