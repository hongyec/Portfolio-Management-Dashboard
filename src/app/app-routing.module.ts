import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { OrderformComponent } from './orderform/orderform.component';
import { OrdersComponent } from './orders/orders.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { TickersComponent } from './tickers/tickers.component';


const routes: Routes = [
{ path: '', component: HomeComponent },
{ path: 'orders', component: OrdersComponent },
{ path: 'tickers', component: TickersComponent },
{ path: 'orderform', component: OrderformComponent},
{ path: 'portfolio', component: PortfolioComponent}
];
@NgModule({
imports: [RouterModule.forRoot(routes)],
exports: [RouterModule]
})
export class AppRoutingModule { }