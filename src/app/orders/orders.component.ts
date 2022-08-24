import { Component, OnInit } from '@angular/core';
import { tick } from '@angular/core/testing';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css'],
})
export class OrdersComponent implements OnInit {
  orders: Order[] = [];

  constructor() {
    this.orders.push(
      new Order(
        1,
        new Date(),
        new Date(),
        1,
        new Date(),
        PriceType.LIMIT,
        ActionType.BUY,
        Status.CLOSE,
        3
      )
    );
    this.orders.push(
      new Order(
        2,
        new Date(),
        new Date(),
        4,
        new Date(),
        PriceType.Market,
        ActionType.BUY,
        Status.CLOSE,
        2
      )
    );
  }

  ngOnInit(): void {
    this.orders.push(
      new Order(
        1,
        new Date(),
        new Date(),
        1,
        new Date(),
        PriceType.LIMIT,
        ActionType.BUY,
        Status.CLOSE,
        1
      )
    );
    this.orders.push(
      new Order(
        2,
        new Date(),
        new Date(),
        4,
        new Date(),
        PriceType.Market,
        ActionType.BUY,
        Status.CLOSE,
        5,
      )
    );
  }
}

export class Order {
  id: number;
  createdDate: Date;
  completedDate: Date;
  marketPrice: number;
  goodTill: Date;
  priceType: PriceType;
  action: ActionType;
  status: any;
  tickerId: number;

  constructor(
    id: number,
    createdDate: Date,
    completedDate: Date,
    marketPrice: number,
    goodTill: Date,
    priceType: PriceType,
    action: ActionType,
    status: Status,
    tickerId: number
  ) {
    this.id = id;
    this.createdDate = createdDate;
    this.completedDate = completedDate;
    this.marketPrice = marketPrice;
    this.goodTill = goodTill;
    this.priceType = priceType;
    this.action = action;
    this.status = status;
    this.tickerId = tickerId;
  }
}

enum PriceType {
  Market = 'market order',
  LIMIT = 'limit order',
  STOP = 'Stop order',
  TRAILING = 'trailing order',
}

enum Status {
  OPEN = 'open',
  CLOSE = 'close',
  COMPLETE = 'complete',
}

enum ActionType {
  BUY = 'buy',
  SELL = 'sell',
}
