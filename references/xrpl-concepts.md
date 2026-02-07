# XRPL Core Concepts

## Accounts
- Identified by a public address (starting with `r...`).
- Requires a secret key (seed) to sign transactions.
- Activated by a minimum reserve of 10 XRP.

## Drops
- The smallest unit of XRP.
- 1 XRP = 1,000,000 drops.
- SDKs often require amounts to be specified in drops.

## Trust Lines
- Required to hold non-XRP tokens (Issued Currencies).
- You "trust" an issuer (gateway) for a specific currency amount.

## Decentralized Exchange (DEX)
- Native to the ledger.
- Anyone can create offers to trade any currency pair (XRP/USD, BTC/ETH, etc.).
- Pathfinding automatically finds the best exchange rate.

## Reserves
- To prevent spam, the ledger requires a minimum XRP balance (Base Reserve).
- Owning objects (Trust Lines, Offers, SignerLists) increases the reserve requirement (Owner Reserve).
