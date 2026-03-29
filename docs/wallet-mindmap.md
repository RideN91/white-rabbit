# White Rabbit Mind Map

## Cíl produktu
- Webová aplikace pro cross-chain swapy
- Práce nad externí walletkou (non-custodial)
- Zaměření na jednoduchý swap flow
- Integrace:
  - THORChain (v1)
  - Maya Protocol (v2)

---

## Hlavní části systému

### 1. Frontend (Angular)
- Angular
- TypeScript
- Reactive Forms
- Signals (lokální state)
- UI:
  - jednoduché komponenty
  - swap flow

---

### 2. Wallet integrace
- externí wallet (např. BTC wallet)
- connect / disconnect
- získání adresy
- odeslání transakce (později)

Poznámka:
- aplikace nespravuje seed ani private key

---

### 3. Swap flow (core logika)
- input:
  - amount
  - destination address
- quote request
- swap preview
- potvrzení swapu
- execution (odeslání tx)
- tracking stavu swapu

---

### 4. Provider integrace
- THORChain:
  - quote
  - inbound address
  - memo
  - execution flow
- Maya Protocol (později):
  - stejné flow jako THORChain

---

### 5. Data
Lokálně:
- UI state
- poslední inputy

Neukládat:
- private key
- seed phrase

---

### 6. Bezpečnost
- validace adres
- kontrola expiry quote
- nepoužívat expirovaný quote
- žádné citlivé údaje v logách

---

### 7. Monetizace (později)
- affiliate fee (THORChain / Maya)
- swap fee

---

## Mermaid diagram

```mermaid
mindmap
  root((White Rabbit))
    Produkt
      Web app
      Swap flow
      THORChain
      Maya Protocol
    Frontend
      Angular
      Reactive Forms
      Signals
      UI Components
    Wallet
      External wallet
      Connect
      Address
      Send transaction
    Swap Flow
      Input
      Quote
      Preview
      Confirm
      Execute
      Tracking
    Integrace
      THORChain
      Maya Protocol
    Data
      Local state
      No private keys
    Security
      Validation
      Quote expiry
      Safe execution
