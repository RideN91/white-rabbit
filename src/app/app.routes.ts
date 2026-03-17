import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./features/swap/pages/swap-page/swap-page.component')
        .then(m => m.SwapPageComponent),
  },
];
