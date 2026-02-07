# XRPL Development Setup

## Prerequisites
- **Node.js**: v14 or higher (v18+ recommended).
- **npm** or **yarn**.

## Project Initialization
1. Create directory: `mkdir my-xrpl-app && cd my-xrpl-app`
2. Initialize Node project: `npm init -y`
3. Install SDK: `npm install xrpl`
4. (Optional) Install TypeScript: `npm install -D typescript ts-node`

## Quick Start Script
Create `index.js`:
```javascript
const xrpl = require('xrpl');

async function main() {
    const client = new xrpl.Client("wss://s.altnet.rippletest.net:51233");
    await client.connect();
    console.log("Connected to XRPL Testnet");
    
    // Create a wallet
    const wallet = xrpl.Wallet.generate();
    console.log("New Wallet Address:", wallet.address);
    
    client.disconnect();
}
main();
```
Run it: `node index.js`
