# XRPL JavaScript SDK Guide

## Installation
```bash
npm install xrpl
```

## Connecting
```javascript
import xrpl from 'xrpl';

async function main() {
  // Use Testnet
  const client = new xrpl.Client("wss://s.altnet.rippletest.net:51233");
  await client.connect();
  
  // ... do stuff ...
  
  await client.disconnect();
}
main();
```

## Wallets
```javascript
// Generate a new wallet
const wallet = xrpl.Wallet.generate();

// From seed
const myWallet = xrpl.Wallet.fromSeed("sEd...");
```

## Transactions
1. **Prepare**: Create the transaction dict.
2. **Sign**: Sign with private key.
3. **Submit**: Send to the network.

```javascript
const tx = {
  TransactionType: "Payment",
  Account: wallet.address,
  Amount: xrpl.xrpToDrops("10"),
  Destination: "r..."
};

const prepared = await client.autofill(tx);
const signed = wallet.sign(prepared);
const result = await client.submitAndWait(signed.tx_blob);

console.log(result);
```
