# White Rabbit 🐇

Angular web application for **BTC → USDC swaps via THORChain**.

White Rabbit is a **swap client built on top of external wallets**, not a wallet itself.

---

## 🚀 Current State (POC V1)

The application currently supports:

### ✅ BTC Wallet Integration

* Browser BTC wallet connection (Xverse / Sats Connect)
* Retrieve and display BTC address
* Reactive wallet state using Angular signals

---

### ✅ Swap Quote Flow

* User inputs:

  * BTC amount
  * USDC (EVM) destination address
* Calls THORChain quote endpoint
* Displays:

  * expected output
  * inbound address
  * memo
  * fees
  * expiry

---

### ✅ Swap Execution Preview

* Combines:

  * form input
  * wallet address
  * THORChain quote response
* Builds a unified **execution preview object**
* Displays:

  * source wallet address
  * BTC amount (BTC + sats)
  * destination address
  * inbound address
  * memo
  * expected output
  * expiry

This preview represents the **exact data required for swap execution**, but no transaction is sent yet.

---

### ✅ Architecture

* Angular standalone components
* Reactive Forms
* Signals for local state
* Feature-based structure

Separation of concerns:

* `thorchain.service` → API communication
* `btc-wallet.service` → wallet integration
* `swap-form` → user input + flow orchestration
* `swap-quote-card` → quote display
* `wallet-connect` → wallet UI

---

## 📁 Project Structure

```
src/app/
  core/services/
    btc-wallet.service.ts
    thorchain.service.ts

  features/swap/
    components/
      wallet-connect/
      swap-form/
      swap-quote-card/
    pages/
      swap-page/
```

---

## ⚙️ How to Run

```bash
npm install
npm start
```

---

## 🔌 Requirements

* Browser with crypto wallet support (Chrome / Brave)
* Installed BTC wallet (e.g. Xverse)

---

## 🧠 Key Concepts

* 1 BTC = 100,000,000 sats
* THORChain works with 1e8 precision
* Quotes must be used before expiry
* Swap execution is **not yet implemented**
* App does **not store private keys or seed phrases**

---

## 🛠️ Next Steps

### 🔹 POC V2 — Execution

* Add swap confirmation step
* Validate:

  * wallet connection
  * quote expiry
* Send BTC transaction to `inbound_address`
* Use `memo` from quote
* Capture `txid`

---

### 🔹 POC V3 — Swap Status

* Track swap progress
* Show:

  * pending
  * processing
  * completed / refunded

---

### 🔹 Future

* Maya Protocol integration
* Multi-provider support
* Better UX & error handling

---

## ⚠️ Disclaimer

This project is in **POC stage**.

Do **not** use with real funds until swap execution is fully validated.

---

## 🧑‍💻 Author

RideN
