---
name: ripple-dapp-skill
description: Guide for building dApps on the XRP Ledger (XRPL) using the xrpl.js SDK. Covers core concepts like Payments, Trust Lines, DEX, and NFTs. Use when starting a new XRPL project, writing scripts to interact with the ledger, or building a frontend.
---

# Ripple XRPL dApp Development

## Stack

| Layer | Tool | Notes |
|-------|------|-------|
| SDK | **xrpl.js** | Official JavaScript/TypeScript SDK for XRPL. |
| Network | **XRPL Mainnet/Testnet** | Public decentralized ledger. |
| Wallet | **Xaman (Xumm)** / **Crossmark** | Popular wallets for signing transactions. |
| Runtime | Node.js 14+ | Required for the JS client and toolchain. |

## Decision Flow

When starting a new XRPL project:

1.  **Define Objective**: Payments, Trading (DEX), Issued Currencies (Tokens), or NFTs.
2.  **Setup**: Initialize a Node.js project and install `xrpl`.
3.  **Connect**: Connect to a public server (e.g., `wss://s.altnet.rippletest.net:51233` for Testnet).
4.  **Interact**: Use `client.submitAndWait()` to send transactions.

## Project Scaffolding

- **.context/**: The brain of the project. Contains files like `active_state.md`, `project_architecture.md`, and `agent_skills.md`.
- **llms.txt**: The master document summarizing Ripple's capabilities, architecture, and roadmap for AI ingestion.
- **demo.md**: A runnable quick start guide demonstrating core capabilities via the `XRPLService`.
- **src/**: Core TS implementations following SOLID principles.
  - `interfaces/IXRPLService.ts`
  - `services/XRPLService.ts`
  - `index.ts`
- **references/**: Legacy or standard reference documentation.

### Bootstrap steps

```bash
# 1. Initialize project
mkdir my-xrpl-dapp && cd my-xrpl-dapp
npm init -y

# 2. Install dependencies
npm install xrpl
npm install -D typescript ts-node @types/node

# 3. Create TS config
npx tsc --init
```

## Core Workflow

### 1. Connect & Fund

```javascript
import xrpl from 'xrpl';

const client = new xrpl.Client("wss://s.altnet.rippletest.net:51233");
await client.connect();

// Get a funded wallet on Testnet
const { wallet } = await client.fundWallet();
```

### 2. Prepare Transaction

```javascript
const tx = {
  TransactionType: "Payment",
  Account: wallet.address,
  Amount: xrpl.xrpToDrops("10"),
  Destination: "r..." // Destination address
};

const prepared = await client.autofill(tx);
```

### 3. Sign & Submit

```javascript
const signed = wallet.sign(prepared);
const result = await client.submitAndWait(signed.tx_blob);

console.log("Transaction result:", result.result.meta.TransactionResult);
```

## Principles

-   **Low Cost & Fast**: Transactions settle in seconds and cost fractions of a cent.
-   **No Smart Contracts (Native)**: XRPL uses native transaction types (Payment, OfferCreate, TrustSet) instead of arbitrary smart contracts for most common use cases.
-   **Issued Currencies**: Anyone can issue tokens (stablecoins, assets) by establishing Trust Lines.

## References

-   `references/xrpl-concepts.md` — Core concepts (Drops, Reserves, Context).
-   `references/xrpl-javascript-sdk.md` — Usage guide for `xrpl.js`.
-   `references/xrpl-setup.md` — Environment setup.
