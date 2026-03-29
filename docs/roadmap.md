# Roadmap

## Fáze 0 — Scope
### Cíl
Udržet projekt malý, čistý a reálně dokončitelný.

### Rozhodnutí
- pouze web app
- Angular + TypeScript
- externí wallet integrace
- THORChain jako první provider
- Maya Protocol jako druhý provider později

### MVP
- connect wallet
- quote
- swap preview
- swap execution
- swap status

---

## Fáze 1 — Web app základ
### Cíl
Mít čistý frontend základ pro swap flow.

### Úkoly
- založení Angular aplikace
- standalone components
- Reactive Forms
- základní services pro wallet a swap API
- základní UI struktura

### Výstupy
- běžící Angular app
- základní architektura feature `swap`
- připravený základ pro další flow

### Stav
- hotovo z větší části

---

## Fáze 2 — Wallet connect
### Cíl
Připojit první wallet a dostat source adresu do appky.

### Úkoly
- BTC wallet connect
- wallet state
- connect / disconnect UI
- zobrazení source BTC address

### Výstupy
- uživatel připojí BTC wallet
- aplikace zná source BTC address

### Stav
- hotovo

---

## Fáze 3 — THORChain quote + preview
### Cíl
Umět připravit swap bez odeslání transakce.

### Úkoly
- input pro BTC amount
- input pro recipient address
- fetch quote z THORChain
- zobrazení quote
- složení execution preview

### Výstupy
- inbound address
- memo
- expected output
- expiry
- unified execution preview

### Stav
- hotovo

---

## Fáze 4 — THORChain execution
### Cíl
Spustit první reálný swap.

### Úkoly
- confirm krok
- validace quote expiry
- validace wallet connectu
- odeslání BTC transakce podle quote instrukcí
- zachycení txid

### Výstupy
- uživatel provede reálný BTC → USDC swap

### Poznámka
Bude potřeba ověřit přesný BTC flow vůči memo / inbound instrukcím.

---

## Fáze 5 — Swap status tracking
### Cíl
Ukázat uživateli, co se se swapem děje.

### Úkoly
- pending state
- polling statusu
- zobrazení txid
- completed / refunded state

### Výstupy
- uživatel vidí průběh swapu od submitu po completion

---

## Fáze 6 — Maya Protocol
### Cíl
Přidat druhý swap provider.

### Úkoly
- Maya quote
- Maya preview
- Maya execution flow
- přepínání provideru
- případně route comparison

### Výstupy
- THORChain + Maya pod jedním UI

---

## Fáze 7 — Cleanup a hardening
### Cíl
Udělat appku stabilnější a bezpečnější.

### Úkoly
- error handling
- edge cases
- lepší validace adres
- UX polish
- logování
- safe guards kolem execution

### Výstupy
- stabilnější a použitelnější web app

---

## MVP definice

### Do MVP patří
- BTC wallet connect
- THORChain quote
- swap preview
- real BTC swap execution
- swap status tracking

### Mimo MVP
- create / import vlastní wallet
- balances dashboard
- portfolio
- mobile app
- staking
- fiat on-ramp
- hardware wallets
- backend
- obecný wallet produkt

---

## Shrnutí
White Rabbit je momentálně zamýšlený jako:

**webový swap klient nad externí walletkou**

ne jako vlastní wallet aplikace.
