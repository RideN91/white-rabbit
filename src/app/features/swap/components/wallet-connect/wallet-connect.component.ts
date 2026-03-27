import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BtcWalletService } from '../../../../core/services/btc-wallet.service';

@Component({
  selector: 'app-wallet-connect',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './wallet-connect.component.html',
  styleUrl: './wallet-connect.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WalletConnectComponent {
  protected readonly btcWalletService = inject(BtcWalletService);
  protected readonly errorMessage = signal<string | null>(null);

  protected async onConnect(): Promise<void> {
    this.errorMessage.set(null);

    try {
      await this.btcWalletService.connect();
    } catch (error) {
      this.errorMessage.set(
        error instanceof Error ? error.message : 'Wallet connection failed.',
      );
    }
  }

  protected onDisconnect(): void {
    this.btcWalletService.disconnect();
  }
}
