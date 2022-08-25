import { Component, OnInit } from '@angular/core';
import { tick } from '@angular/core/testing';
import { Observable } from 'rxjs';
import { OrdersService } from '../services/orders.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css'],
})
export class OrdersComponent implements OnInit {
  orders!: Observable<Array<Order>>;

  constructor(private ordersService: OrdersService) {
  }

  ngOnInit(): void {
    this.orders  = this.ordersService.getOrders();
  }
}

export class Order {
  id: number|undefined;
  createdDate!: Date|undefined;
  completedDate!: Date|undefined;
  marketPrice: number;
  goodTill!: Date|undefined;
  priceType: PriceType;
  action: ActionType;
  status: any;
  tickerId: number;
  numShare: number;

  constructor(
    id: number|undefined,
    createdDate: Date|undefined,
    completedDate: Date|undefined,
    marketPrice: number,
    goodTill: Date|undefined,
    priceType: PriceType,
    action: ActionType,
    status: Status,
    tickerId: number,
    numShare: number,
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
    this.numShare = numShare;
  }
}

export enum PriceType {
  Market = 'market order',
  LIMIT = 'limit order',
  STOP = 'Stop order',
  TRAILING = 'trailing order',
}

export enum Status {
  OPEN = 'open',
  CLOSE = 'close',
  COMPLETE = 'complete',
}

export enum ActionType {
  BUY = 'buy',
  SELL = 'sell',
}
