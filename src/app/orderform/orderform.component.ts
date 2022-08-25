import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Observable } from 'rxjs';
import { Action } from 'rxjs/internal/scheduler/Action';
import { ActionType, Order, PriceType, Status } from '../orders/orders.component';
import { TickersService } from '../services/tickers.service';
import { Ticker } from '../ticker/ticker.component';

@Component({
  selector: 'app-orderform',
  templateUrl: './orderform.component.html',
  styleUrls: ['./orderform.component.css']
})
export class OrderformComponent implements OnInit {
  eStatus = Status;
  eAction = ActionType;
  ePriceType = PriceType;

  orderCreate!: Order;
  tickers!: Observable<Array<Ticker>>
  constructor(private tickerService: TickersService) { }
  create(form: NgForm) {
  }

  ngOnInit(): void {
    this.orderCreate = new Order(
      2,
      new Date(),
      new Date(),
      4,
      new Date(),
      PriceType.Market,
      ActionType.BUY,
      Status.OPEN,
      2,
    );
    this.tickers = this.tickerService.getTickers();
  }
}
