# XRPL dApp Skill Demo

This document demonstrates how to use the core capabilities of the XRPL dApp skill via the provided `XRPLService`.

## Prerequisites

Before running the demo, ensure you have initialized the project dependencies:
```bash
npm install
npm run build
```

## Core Scenarios

### 1. Connecting to the Ledger and Generating a Wallet

The `XRPLService` abstracts connection and wallet management.

```typescript
import { XRPLService } from './services/XRPLService';

async function demoConnection() {
  // Use the Testnet for testing
  const service = new XRPLService("wss://s.altnet.rippletest.net:51233");
  await service.connect();

  console.log("Connected to XRPL.");

  // Generate a new temporary wallet
  const wallet = service.generateWallet();
  console.log(`Generated Wallet Address: ${wallet.address}`);

  await service.disconnect();
}
```

### 2. Sending a Payment

This snippet demonstrates preparing, signing, and submitting a standard XRP payment transaction onto the ledger.

```typescript
import { XRPLService } from './services/XRPLService';

async function demoPayment() {
  const service = new XRPLService("wss://s.altnet.rippletest.net:51233");
  await service.connect();

  // Create two wallets
  const senderWallet = service.generateWallet();
  const receiverWallet = service.generateWallet();

  console.log(`Sending from ${senderWallet.address} to ${receiverWallet.address}`);
  
  // Send 10 XRP. In production, ensure the sender wallet is funded!
  try {
    const result = await service.sendPayment(senderWallet, receiverWallet.address, "10");
    console.log("Transaction Result:", result);
  } catch (error) {
    console.error("Payment failed (likely unfunded testnet account):", error);
  }

  await service.disconnect();
}
```

## Running the Demo File

We have provided a runnable index file showing this in action:
```bash
npx ts-node src/index.ts
```

## Next Steps
- Refer to `llms.txt` for AI-ingested overarching capability goals and the 2026 Roadmap.
- Build upon the `IXRPLService.ts` interface for modular mocking during unit testing.
