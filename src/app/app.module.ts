import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MarketListComponent } from './market/market-list/market-list.component';
import { CreateMarketComponent } from './market/create-market/create-market.component';
import { CoinListComponent } from './coin/coin-list/coin-list.component';
import { CreateCoinComponent } from './coin/create-coin/create-coin.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    MarketListComponent,
    CreateMarketComponent,
    CoinListComponent,
    CreateCoinComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
