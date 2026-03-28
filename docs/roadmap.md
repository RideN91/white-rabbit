# Roadmap

## Fáze 0 — návrh
### Cíl
Vyjasnit scope a neskočit hned do kódu bez architektury.

### Výstupy
- definice MVP
- seznam podporovaných chainů
- seznam funkcí mimo MVP
- základní návrh fee modelu

### Rozhodnutí
- web první
- Angular + TypeScript
- NestJS backend
- THORChain jako první integrace

---

## Fáze 1 — technický základ
### Cíl
Připravit projekt tak, aby se dal škálovat.

### Úkoly
- založit monorepo nebo standard repo
- vytvořit `apps/web`
- vytvořit `apps/api`
- vytvořit `packages/wallet-core`
- nastavit lint, format, testy
- nastavit env proměnné
- nastavit CI

### Výstupy
- běžící web app
- běžící API
- základní struktura projektu

---

## Fáze 2 — wallet core MVP
### Cíl
Umět vytvořit a importovat wallet.

### Úkoly
- create wallet
- import wallet ze seed phrase
- password lock / unlock
- generování adres
- základní account model

### Výstupy
- uživatel vytvoří wallet
- uživatel importuje wallet
- wallet se lokálně uloží šifrovaně

---

## Fáze 3 — balances a receive/send
### Cíl
Zobrazit první reálnou hodnotu pro uživatele.

### Úkoly
- fetch balances
- zobrazení tokenů
- receive screen
- send form
- validace adres
- potvrzení transakcí

### Výstupy
- funkční receive
- funkční send
- přehled balance

---

## Fáze 4 — THORChain integrace
### Cíl
Přidat první swap flow.

### Úkoly
- quote API
- swap preview
- potvrzení swapu
- fee zobrazení
- affiliate fee parametr
- swap historie

### Výstupy
- uživatel udělá swap přes THORChain
- systém uloží a zobrazí historii swapu

---

## Fáze 5 — Maya Protocol
### Cíl
Rozšířit likviditu a routing.

### Úkoly
- quote integrace
- swap flow
- porovnání route
- fallback logika

### Výstupy
- druhý swap provider
- základ pro agregaci

---

## Fáze 6 — portfolio a tracking
### Cíl
Přidat lepší UX a udržení uživatele.

### Úkoly
- historie portfolia
- graf hodnoty portfolia
- přehled fee revenue
- watchlist
- notifikace

---

## Fáze 7 — security hardening
### Cíl
Zvýšit důvěru a připravit appku na reálné použití.

### Úkoly
- dependency audit
- secure storage review
- rate limiting
- logování
- error monitoring
- recovery flow

---

## Fáze 8 — mobile app
### Cíl
Rozšířit produkt po ověření webového MVP.

### Možnosti
- React Native
- Flutter
- později nativní řešení

### Doporučení
Mobile řešit až ve chvíli, kdy:
- bude fungovat wallet core
- bude validovaný swap use-case
- budou první uživatelé

---

## MVP definice
Do MVP patří:
- create/import wallet
- unlock wallet
- balances
- receive/send
- THORChain swap
- základní historie

Mimo MVP:
- staking
- fiat on-ramp
- NFT
- push notifikace
- hardware wallet support
