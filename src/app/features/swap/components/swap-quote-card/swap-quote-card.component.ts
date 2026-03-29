import { Component, Input } from '@angular/core';
import { ThorchainQuoteResponse } from '../../../../core/services/thorchain.service';

@Component({
  selector: 'app-swap-quote-card',
  standalone: true,
  templateUrl: './swap-quote-card.component.html',
  styleUrl: './swap-quote-card.component.scss',
})
export class SwapQuoteCardComponent {
  @Input({ required: true }) quote!: ThorchainQuoteResponse;

  protected get expectedAmountOutFormatted(): string {
    return this.formatAssetAmount(this.quote.expected_amount_out, 8);
  }

  protected get totalFeeFormatted(): string {
    return this.formatAssetAmount(this.quote.fees?.total ?? '0', 8);
  }

  protected get expiryFormatted(): string {
    return new Date(this.quote.expiry * 1000).toLocaleString();
  }

  private formatAssetAmount(value: string, decimals: number): string {
    const amount = Number(value) / Math.pow(10, decimals);

    return new Intl.NumberFormat('cs-CZ', {
      minimumFractionDigits: 1,
      maximumFractionDigits: 1,
    }).format(amount);
  }
}
