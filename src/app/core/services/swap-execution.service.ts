import { Injectable } from '@angular/core';
import { SwapExecutionPreview } from '../../features/swap/components/swap-form/swap-form.component';

@Injectable({ providedIn: 'root' })
export class SwapExecutionService {
  execute(preview: SwapExecutionPreview): void {
    console.log('EXECUTE_SWAP_SERVICE', preview);
  }
}
