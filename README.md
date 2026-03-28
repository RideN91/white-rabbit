# White Rabbit 🐇

Angular application for **BTC → USDC swaps via THORChain**.

---

## 🚀 Current State (POC V1)

The application currently supports:

### ✅ BTC Wallet Integration

* Browser BTC wallet connection (Xverse / Sats Connect)
* Retrieve and display BTC address
* Reactive wallet state using Angular signals

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

### ✅ Architecture

* Angular standalone components
* Reactive Forms
* Signals for local state
* Clean separation of concerns:

  * `thorchain.service` → API communication
  * `btc-wallet.service` → wallet integration
  * `wallet-connect` → UI layer
  * `swap-form` → user input
  * `swap-quote-card` → quote display

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

---

## 🛠️ Next Steps

### 🔹 POC V2

* EVM wallet connection (MetaMask)
* Autofill destination address

### 🔹 POC V3

* Real BTC transaction execution
* Use:

  * `inbound_address`
  * `memo`
* Validate:

  * quote expiry
  * network halt

### 🔹 Future

* Swap status tracking
* Multi-chain support
* Better UX & error handling

---

## ⚠️ Disclaimer

This project is currently in **POC stage**.
Do **not** use with real funds until swap execution is fully validated.

---

## 🧑‍💻 Author

RideN
