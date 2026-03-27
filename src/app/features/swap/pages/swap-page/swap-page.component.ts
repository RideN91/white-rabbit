import { Component } from '@angular/core';
import { SwapFormComponent } from '../../components/swap-form/swap-form.component';
import { WalletConnectComponent } from '../../components/wallet-connect/wallet-connect.component';

@Component({
  standalone: true,
  imports: [SwapFormComponent, WalletConnectComponent],
  templateUrl: './swap-page.component.html',
})
export class SwapPageComponent {}
