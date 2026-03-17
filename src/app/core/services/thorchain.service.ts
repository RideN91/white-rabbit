import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';

export interface ThorchainQuoteResponse {
  inbound_address: string;
  memo: string;
  expected_amount_out: string;
  expiry: number;

  fees?: {
    asset: string;
    affiliate: string;
    outbound: string;
    liquidity: string;
    total: string;
  };
}

@Injectable({
  providedIn: 'root',
})
export class ThorchainService {
  private readonly http = inject(HttpClient);

  private readonly baseUrl =
    'https://thornode.ninerealms.com/thorchain/quote/swap';

  getSwapQuote(amount: string, destination: string): Observable<ThorchainQuoteResponse> {
    const params = new HttpParams()
      .set('from_asset', 'BTC.BTC')
      .set('to_asset', 'ETH.USDC')
      .set('amount', amount)
      .set('destination', destination);

    return this.http.get<ThorchainQuoteResponse>(this.baseUrl, { params });
  }
}
