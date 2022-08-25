import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Order } from '../orders/orders.component';

@Injectable({
  providedIn: 'root'
})
export class OrdersService {

  private baseUrl = "http://localhost:8081/orders";

  constructor(private http: HttpClient) {}

  getOrders(): Observable<Array<Order>> {
    return this.http.get(this.baseUrl) as Observable<Array<Order>>;
  }

  createOrder(order: Partial<Order>): void {
    console.log(order)
    this.http.post(this.baseUrl, order);
  }
}
