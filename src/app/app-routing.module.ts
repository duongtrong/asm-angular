import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {MarketListComponent} from './market/market-list/market-list.component';
import {CreateMarketComponent} from './market/create-market/create-market.component';
import {CoinListComponent} from './coin/coin-list/coin-list.component';
import {CreateCoinComponent} from './coin/create-coin/create-coin.component';


const routes: Routes = [
  { path: '', redirectTo: 'student', pathMatch: 'full' },
  { path: 'markets', component: MarketListComponent },
  { path: 'addMarket', component: CreateMarketComponent },
  { path: 'coin', component: CoinListComponent },
  { path: 'addCoin', component: CreateCoinComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
