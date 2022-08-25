import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Observable } from 'rxjs';
import { Action } from 'rxjs/internal/scheduler/Action';
import { ActionType, Order, PriceType, Status } from '../orders/orders.component';
import { OrdersService } from '../services/orders.service';
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

  orderCreate!: Partial<Order>;
  submitted:boolean = false;
  tickers!: Observable<Array<Ticker>>

  constructor(private tickerService: TickersService, private orderService: OrdersService) { }

  create(form: NgForm) {
    console.log("create Order is", this.orderCreate);
    console.log("In form", form.value)

    this.orderService.createOrder(this.orderCreate);
    form.reset();
    this.orderCreate = new Order(
      undefined,
      undefined,
      undefined,
      4,
      undefined,
      PriceType.Market,
      ActionType.BUY,
      Status.OPEN,
      2,
      4,
    );
    this.submitted = true;
  }

  ngOnInit(): void {
    this.orderCreate = new Order(
      undefined,
      undefined,
      undefined,
      4,
      undefined,
      PriceType.Market,
      ActionType.BUY,
      Status.OPEN,
      2,
      4,
    );
    this.tickers = this.tickerService.getTickers();
  }
}
