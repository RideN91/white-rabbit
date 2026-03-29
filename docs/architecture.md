# Architecture

## 1. Cíl architektury
Postavit jednoduchou web appku pro swap flow nad externí walletkou tak, aby:
- šla rychle doručit první použitelná verze
- šla rozšiřovat o další chainy a providery
- zůstala přehledná a nepřestřelená

---

## 2. Návrh složek

src/app/
├─ core/
│  └─ services/
│     ├─ btc-wallet.service.ts
│     ├─ thorchain.service.ts
│     ├─ swap-execution.service.ts
│     └─ swap-status.service.ts
├─ features/
│  └─ swap/
│     ├─ components/
│     │  ├─ wallet-connect/
│     │  ├─ swap-form/
│     │  ├─ swap-quote-card/
│     │  └─ swap-execution-preview/
│     └─ pages/
│        └─ swap-page/
└─ shared/

---

## 3. Vrstvy systému

### A. UI vrstva
Zodpovědnost:
- formuláře
- zobrazení quote
- preview swapu
- potvrzení a stav swapu

Technologie:
- Angular
- TypeScript
- Reactive Forms

### B. Wallet vrstva
Zodpovědnost:
- connect / disconnect wallet
- získání source adresy
- později odeslání transakce

Příklad:
- btc-wallet.service.ts
- později evm-wallet.service.ts

### C. Provider vrstva
Zodpovědnost:
- volání quote API
- execution data z providerů
- polling swap statusu

Příklad:
- thorchain.service.ts
- později maya.service.ts

### D. Flow vrstva
Zodpovědnost:
- spojení formuláře, walletky a provider response
- validace quote expiry
- příprava execution payloadu
- spuštění swap flow

Příklad:
- swap-execution.service.ts

---

## 4. Tok dat

### Quote flow
1. uživatel připojí BTC wallet
2. zadá amount a recipient address
3. appka zavolá THORChain quote
4. zobrazí inbound address, memo, fees, expiry
5. složí execution preview

### Execution flow
1. uživatel potvrdí swap
2. ověří se wallet connect
3. ověří se quote expiry
4. odešle se BTC transakce podle quote instrukcí
5. uloží se txid
6. začne tracking swapu

---

## 5. Uložení dat

### Lokálně ve webu
Ukládat:
- jednoduché UI preference
- případně poslední použitou recipient address

Neukládat:
- private key
- seed phrase

Poznámka:
White Rabbit aktuálně používá externí wallet, takže citlivé klíče nespravuje.

---

## 6. Bezpečnostní principy
- neukládat seed ani private key
- validovat vstupy z formuláře
- nepoužívat expirovaný quote
- neodesílat swap bez validních execution dat
- nepsat citlivá data do logů

---

## 7. První technické rozhodnutí
Aktuální směr:
- Angular web app
- externí wallet integrace
- THORChain jako první provider
- Maya Protocol přidat až po dokončení prvního swap flow

---

## 8. Shrnutí
White Rabbit je momentálně:

webový swap klient nad externí walletkou
