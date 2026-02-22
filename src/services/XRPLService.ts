import { Client, Wallet, xrpToDrops, Payment } from 'xrpl';
import { IXRPLService } from '../interfaces/IXRPLService';

/**
 * Solid implementation for interacting with the XRPL.
 * Handles the single responsibility of core XRPL network operations.
 */
export class XRPLService implements IXRPLService {
    private client: Client;
    private isConnected: boolean = false;

    /**
     * @param wssUrl The WebSocket URL of the XRPL node to connect to
     */
    constructor(private wssUrl: string) {
        this.client = new Client(wssUrl);
    }

    public async connect(): Promise<void> {
        if (!this.isConnected) {
            await this.client.connect();
            this.isConnected = true;
        }
    }

    public async disconnect(): Promise<void> {
        if (this.isConnected) {
            await this.client.disconnect();
            this.isConnected = false;
        }
    }

    public generateWallet(): Wallet {
        return Wallet.generate();
    }

    public async sendPayment(senderWallet: Wallet, recipientAddress: string, amount: string): Promise<any> {
        if (!this.isConnected) {
            throw new Error("XRPLService is not connected to the ledger. Call connect() first.");
        }

        const tx: Payment = {
            TransactionType: "Payment",
            Account: senderWallet.address,
            Amount: xrpToDrops(amount),
            Destination: recipientAddress
        };

        // 1. Prepare and autofill fees/sequences
        const prepared = await this.client.autofill(tx);

        // 2. Sign locally
        const signed = senderWallet.sign(prepared);

        // 3. Submit to network and await validation
        const result = await this.client.submitAndWait(signed.tx_blob);

        return result;
    }
}
