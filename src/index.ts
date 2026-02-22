import { XRPLService } from './services/XRPLService';

/**
 * Entry point for XRPL dApp Skill Demo.
 * Showcases capability to connect, generate wallets, and handle payments.
 */
async function main() {
    console.log("Starting XRPL Demo...");

    // Instantiate the service using testnet
    const xrplService = new XRPLService("wss://s.altnet.rippletest.net:51233");

    try {
        console.log("Connecting to ledger...");
        await xrplService.connect();
        console.log("Connected successfully.\n");

        // Show generating wallets
        const wallet1 = xrplService.generateWallet();
        const wallet2 = xrplService.generateWallet();

        console.log(`[Wallet 1] Created: ${wallet1.address}`);
        console.log(`[Wallet 2] Created: ${wallet2.address}`);

        console.log("\nNote: Attempting to send a transaction on testnet requires Wallet 1 to be funded via the Testnet Faucet.");
        console.log("If unfunded, the submitAndWait call will throw a terNO_ACCOUNT or similar error.\n");

        // To actually test payments reliably on testnet, use client.fundWallet() which we omitted here 
        // to keep the XRPLService strictly focused on raw transaction generation.

    } catch (err) {
        console.error("An error occurred during the demo:", err);
    } finally {
        console.log("Disconnecting from ledger...");
        await xrplService.disconnect();
        console.log("Disconnected.");
    }
}

main();
