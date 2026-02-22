import { Wallet, SubmittableTransaction } from 'xrpl';

export interface IXRPLService {
    /**
     * Connects to the XRPL ledger
     */
    connect(): Promise<void>;

    /**
     * Disconnects from the XRPL ledger
     */
    disconnect(): Promise<void>;

    /**
     * Generates a new XRPL wallet
     * @returns A distinct Wallet instance containing an address and secret
     */
    generateWallet(): Wallet;

    /**
     * Constructs, signs, and submits a payment transaction
     * @param senderWallet The funded wallet sending the transaction
     * @param recipientAddress The destination XRP address
     * @param amount The XRP amount to send (will be converted to drops internally)
     * @returns The transaction result or payload
     */
    sendPayment(senderWallet: Wallet, recipientAddress: string, amount: string): Promise<any>;
}
