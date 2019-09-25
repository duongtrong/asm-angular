import {Market} from '../market/market';

export class Coin {
  coinId: number;
  name: string;
  baseAsset: number;
  quoteAsset: number;
  lastPrice: number;
  volumn24h: number;
  market: Market;
}
