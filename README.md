# WhiteRabbit

This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 21.0.4.

## Development server

To start a local development server, run:

```bash
ng serve
```

Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.

## Code scaffolding

Angular CLI includes powerful code scaffolding tools. To generate a new component, run:

```bash
ng generate component component-name
```

For a complete list of available schematics (such as `components`, `directives`, or `pipes`), run:

```bash
ng generate --help
```

## Building

To build the project run:

```bash
ng build
```

This will compile your project and store the build artifacts in the `dist/` directory. By default, the production build optimizes your application for performance and speed.

## Running unit tests

To execute unit tests with the [Vitest](https://vitest.dev/) test runner, use the following command:

```bash
ng test
```

## Running end-to-end tests

For end-to-end (e2e) testing, run:

```bash
ng e2e
```

Angular CLI does not come with an end-to-end testing framework by default. You can choose one that suits your needs.

## Additional Resources

For more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.

# 🐇 White Rabbit — Projekt dokumentace (v0.1)

## Overview

White Rabbit je Angular aplikace pro **BTC → USDC swap přes THORChain**.

Aktuální stav:

* aplikace získává **swap quote**
* zobrazuje výstup, fees, memo a inbound address
* zatím **neprovádí samotný swap**

---

## Tech Stack

* Angular (standalone)
* Reactive Forms
* HttpClient
* Signals (state)
* THORChain API

---

## Architektura

src/app/

core/
services/
thorchain.service.ts

features/
swap/
pages/
swap-page/

```
components/
  swap-form/
  swap-quote-card/
```

---

## Flow aplikace

1. User zadá:

   * BTC amount
   * USDC address

2. App:

   * převede BTC → sats
   * zavolá THORChain API

3. Response:

   * inbound_address
   * memo
   * expected_amount_out
   * fees
   * expiry

4. UI:

   * zobrazí quote

---

## Důležité: Units

### BTC

1 BTC = 100,000,000 sats

```ts
amount * 100_000_000
```

### THORChain

Všechny hodnoty jsou v **1e8 (10⁸)**

```ts
value / 100_000_000
```

👉 platí i pro USDC

---

## API

Endpoint:
https://thornode.ninerealms.com/thorchain/quote/swap

Params:

* from_asset = BTC.BTC
* to_asset = ETH.USDC
* amount = sats
* destination = EVM address

---

## Důležité poznámky

### Quote ≠ Market price

* TradingView = spot
* THORChain = execution (po fees + slippage)

---

### Aktuální limitace

* ❌ neposílá BTC

* ❌ neprovádí swap

* ❌ nesleduje tx

* ✅ pouze zobrazuje quote

---

## Další kroky

### MVP dokončení

* copy inbound address
* copy memo
* expiry countdown
* instrukce pro usera

### Funkční swap

* sledování transakce
* swap status

---

## Stav projektu

MVP (quote-only)

---

## Mentální model

BTC input → Quote → Instructions → (swap později)

---
