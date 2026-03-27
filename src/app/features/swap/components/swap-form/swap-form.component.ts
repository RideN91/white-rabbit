import { Component, inject, signal } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import {
  ThorchainQuoteResponse,
  ThorchainService,
} from '../../../../core/services/thorchain.service';
import { SwapQuoteCardComponent } from '../swap-quote-card/swap-quote-card.component';
import { BtcWalletService } from '../../../../core/services/btc-wallet.service';

@Component({
  selector: 'app-swap-form',
  standalone: true,
  imports: [ReactiveFormsModule, SwapQuoteCardComponent],
  templateUrl: './swap-form.component.html',
})
export class SwapFormComponent {
  private readonly fb = inject(FormBuilder);
  private readonly thorchainService = inject(ThorchainService);

  protected readonly btcWallet = inject(BtcWalletService);
  protected readonly isLoading = signal(false);
  protected readonly quote = signal<ThorchainQuoteResponse | null>(null);
  protected readonly errorMessage = signal<string | null>(null);

  protected readonly form = this.fb.group({
    amount: ['', [Validators.required, Validators.min(0.00001)]],
    recipient: ['', [Validators.required, Validators.minLength(5)]],
  });

  protected onSubmit(): void {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }

    const { amount, recipient } = this.form.getRawValue();

    if (!amount || !recipient) {
      return;
    }

    const amountInSats = this.convertBtcToSats(amount);

    this.isLoading.set(true);
    this.quote.set(null);
    this.errorMessage.set(null);

    this.thorchainService.getSwapQuote(amountInSats, recipient).subscribe({
      next: (response) => {
        this.quote.set(response);
        this.isLoading.set(false);
      },
      error: () => {
        this.errorMessage.set('Failed to fetch quote.');
        this.isLoading.set(false);
      },
    });
  }

  private convertBtcToSats(amount: string): string {
    return Math.round(Number(amount) * 100_000_000).toString();
  }
}
