# White Rabbit 🐇

Angular web app for **BTC → USDC swaps via THORChain**.\
Client-side only --- uses external wallets (Xverse via sats-connect).

------------------------------------------------------------------------

## 🚀 Current State (POC V1 → V2 in progress)

### ✅ Wallet

-   BTC wallet connect (Xverse / sats-connect)
-   address + reactive state (signals)

### ✅ Quote

-   input: BTC amount + destination address
-   THORChain quote fetch
-   data:
    -   inbound address
    -   memo
    -   expected out
    -   expiry

### ✅ Execution Preview

Unified model (`SwapExecutionPreview`): - amount (BTC + sats) -
fromAddress - destinationAddress - inboundAddress - memo -
expectedAmountOut - expiry

### 🚧 Execution (in progress)

-   confirm step (Execute Swap button)
-   validation:
    -   wallet connected
    -   preview exists
    -   quote not expired
-   execution service (`swap-execution.service`)
-   wallet integration (`btc-wallet.service.signAndBroadcastPsbt`)
-   PSBT builder scaffold (not implemented yet)

------------------------------------------------------------------------

## 🧱 Architecture

-   Angular standalone components
-   Reactive Forms
-   Signals (local state)

### Services

-   `thorchain.service` → API (quote)
-   `btc-wallet.service` → wallet (connect, sign)
-   `swap-execution.service` → execution flow

------------------------------------------------------------------------

## 📁 Structure

src/app/ core/services/ btc-wallet.service.ts thorchain.service.ts
swap-execution.service.ts

features/swap/ components/ wallet-connect/ swap-form/ swap-quote-card/

------------------------------------------------------------------------

## ⚙️ Run

npm install npm start

------------------------------------------------------------------------

## 🧠 Notes

-   1 BTC = 100,000,000 sats
-   THORChain uses 1e8 precision
-   memo is required for swap
-   app does not hold private keys

------------------------------------------------------------------------

## 🔜 Next

-   build PSBT (UTXO + outputs + memo)
-   sign via wallet
-   broadcast BTC tx
-   return txId

------------------------------------------------------------------------

## ⚠️ Disclaimer

POC only. Do not use real funds yet.
