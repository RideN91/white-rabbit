import { Injectable, computed, signal } from '@angular/core';
import { AddressPurpose, request } from 'sats-connect';

export interface BtcWalletAccount {
  address: string;
  publicKey?: string;
  purpose?: string;
}

export interface SignedPsbtResult {
  psbtBase64: string;
  txId?: string;
}

@Injectable({
  providedIn: 'root',
})
export class BtcWalletService {
  private readonly _account = signal<BtcWalletAccount | null>(null);
  private readonly _isConnecting = signal(false);

  readonly account = this._account.asReadonly();
  readonly isConnecting = this._isConnecting.asReadonly();
  readonly isConnected = computed(() => this._account() !== null);

  async connect(): Promise<void> {
    this._isConnecting.set(true);

    try {
      const response = await request('getAccounts', {
        purposes: [AddressPurpose.Payment],
        message: 'White Rabbit wants to connect your Bitcoin wallet.',
      });

      if (response.status === 'error') {
        throw new Error(response.error.message || 'BTC wallet connection failed.');
      }

      const paymentAccount = response.result.find(
        (acc) => acc.purpose === AddressPurpose.Payment
      );

      if (!paymentAccount) {
        throw new Error('No BTC payment account returned.');
      }

      this._account.set({
        address: paymentAccount.address,
        publicKey: paymentAccount.publicKey,
        purpose: paymentAccount.purpose,
      });
    } finally {
      this._isConnecting.set(false);
    }
  }

  public disconnect(): void {
    this._account.set(null);
  }

  public async signAndBroadcastPsbt(psbtBase64: string): Promise<SignedPsbtResult> {
    const account = this._account();

    if (!account?.address) {
      throw new Error('BTC wallet is not connected.');
    }

    // TODO:
    // 1) zavolat sats-connect signPsbt
    // 2) podepsat inputy pro payment address
    // 3) ideálně použít broadcast, pokud ho flow dovolí
    // 4) vrátit signed psbt / txid

    console.log('SIGN_PSBT_REQUEST', {
      address: account.address,
      psbtBase64,
    });

    return {
      psbtBase64,
    };
  }

  public getPaymentAddress(): string {
    const address = this._account()?.address;

    if (!address) {
      throw new Error('BTC wallet is not connected.');
    }

    return address;
  }
}
