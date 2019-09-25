import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import {Market} from '../market';
import {MarketService} from '../market.service';
import {Route, Router} from '@angular/router';

@Component({
  selector: 'app-market-list',
  templateUrl: './market-list.component.html',
  styleUrls: ['./market-list.component.css']
})
export class MarketListComponent implements OnInit {

  markets: Observable<Market[]>;
  constructor(private marketService: MarketService, private router: Router) { }

  ngOnInit() {
    this.reloadData();
  }

  reloadData = () => {
    console.log(this.markets);
    this.markets = this.marketService.getMarketList();
  }
}
