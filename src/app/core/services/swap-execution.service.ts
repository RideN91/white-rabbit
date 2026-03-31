import { inject, Injectable } from '@angular/core';
import { SwapExecutionPreview } from '../../features/swap/components/swap-form/swap-form.component';
import { BtcWalletService } from './btc-wallet.service';

@Injectable({ providedIn: 'root' })
export class SwapExecutionService {
  private readonly btcWallet = inject(BtcWalletService);

  private buildParams(preview: SwapExecutionPreview) {
    return {
      amountSats: Number(preview.amountSats),
      inboundAddress: preview.inboundAddress,
      memo: preview.memo,
      changeAddress: preview.fromAddress ?? '',
    };
  }

  public async execute(preview: SwapExecutionPreview): Promise<void> {
    const params = this.buildParams(preview);

    console.log('EXECUTION_PARAMS', params);

    const psbtBase64 = await this.buildPsbtBase64(preview);

    const result = await this.btcWallet.signAndBroadcastPsbt(psbtBase64);

    console.log('SIGNED_PSBT_RESULT', result);
  }

  private async buildPsbtBase64(_preview: SwapExecutionPreview): Promise<string> {
    throw new Error('PSBT builder is not implemented yet.');
  }
}
