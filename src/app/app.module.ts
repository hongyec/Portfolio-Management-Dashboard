import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { OrdersComponent } from './orders/orders.component';
import { OrderComponent } from './order/order.component';
import { TickersComponent } from './tickers/tickers.component';
import { TickerComponent } from './ticker/ticker.component';
import { OrderformComponent } from './orderform/orderform.component';
import { FormsModule } from '@angular/forms';
import { PortfolioComponent } from './portfolio/portfolio.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    OrdersComponent,
    OrderComponent,
    TickersComponent,
    TickerComponent,
    OrderformComponent,
    PortfolioComponent
  ],
  imports: [
    FormsModule,
    HttpClientModule,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [{provide: "IS_VERBOSE_LOGGER", useValue: true}],
  bootstrap: [AppComponent]
})
export class AppModule { }
