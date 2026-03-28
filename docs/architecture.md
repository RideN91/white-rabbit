# Architecture

## 1. Cíl architektury
Postavit wallet tak, aby:
- šla rychle doručit první verze
- šla rozšiřovat o další chainy
- se nerozsypala při přidání mobile appky
- byly oddělené citlivé části od UI

---

## 2. Návrh složek

```txt
wallet-app/
├─ apps/
│  ├─ web/
│  └─ api/
├─ packages/
│  ├─ wallet-core/
│  ├─ chain-adapters/
│  ├─ thorchain-integration/
│  ├─ maya-integration/
│  ├─ shared-types/
│  └─ ui-kit/
├─ docs/
│  ├─ wallet-mindmap.md
│  ├─ roadmap.md
│  └─ architecture.md
├─ .env.example
├─ package.json
└─ README.md
```

---

## 3. Vrstvy systému

### A. Web app
Zodpovědnost:
- UI
- formuláře
- routing
- správa session
- zobrazení balances, historie, swap flow

Doporučený stack:
- Angular
- TypeScript
- RxJS

---

### B. API
Zodpovědnost:
- pricing
- cache
- sjednocení dat z providerů
- transakční historie
- analytics
- interní admin endpointy

Doporučený stack:
- NestJS
- PostgreSQL
- Redis

---

### C. Wallet Core
Zodpovědnost:
- seed phrase
- derivace klíčů
- generování adres
- signing
- chain-neutral rozhraní

Poznámka:
Tato vrstva má být co nejvíc oddělená od Angularu.

---

### D. Chain adapters
Zodpovědnost:
- implementace rozdílů mezi chainy
- EVM adapter
- BTC-like adapter
- THORChain specifika
- Maya specifika

Příklad:
- `IChainAdapter`
- `EvmChainAdapter`
- `BitcoinChainAdapter`

---

## 4. Tok dat

### Create wallet flow
1. UI zavolá wallet core
2. wallet core vygeneruje seed
3. wallet core odvodí adresy
4. výsledek se zašifruje heslem
5. blob se uloží lokálně

### Swap flow
1. UI načte quote
2. API nebo provider vrátí route
3. UI ukáže fee a potvrzení
4. wallet core podepíše transakci
5. odešle se transakce
6. historie se uloží

---

## 5. Uložení dat

### Lokálně ve webu
Ukládat:
- theme
- preferences
- selected network
- encrypted wallet blob

Neukládat:
- plain private key
- plain seed phrase

Možnosti:
- localStorage
- IndexedDB

### Backend
Ukládat:
- cache cen
- agregovanou historii
- telemetry
- revenue data

Databáze:
- PostgreSQL
- Redis

---

## 6. Bezpečnostní principy
- seed phrase zobrazit jen při vytvoření
- nutit potvrzení zálohy
- šifrovat wallet lokálně heslem
- nepsat citlivá data do logů
- validovat inputy
- používat auditované knihovny
- držet wallet core izolovaný od UI helperů

---

## 7. Doporučené balíčky
### Frontend
- Angular
- RxJS
- zod nebo yup pro validace

### Backend
- NestJS
- Prisma nebo TypeORM
- Redis client

### Blockchain
- ethers
- bitcoinjs-lib
- chain-specific SDK podle potřeby

---

## 8. První technické rozhodnutí
Doporučená první verze:
- Angular web app
- NestJS API
- wallet-core jako samostatný package
- THORChain jako první provider
- Maya přidat až po dokončení prvního swap flow
