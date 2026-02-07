<p align="center">
  <img src="assets/logo.png" alt="ripple-dapp-skill" width="200px">
</p>

<p align="center">
  <a href="https://opensource.org/licenses/MIT"><img src="https://img.shields.io/badge/License-MIT-yellow.svg?style=flat-square" alt="License: MIT"></a>
  <a href="https://xrpl.org"><img src="https://img.shields.io/badge/XRPL-Ledger-black.svg?style=flat-square" alt="XRPL"></a>
  <a href="https://js.xrpl.org"><img src="https://img.shields.io/badge/SDK-xrpl.js-blue.svg?style=flat-square" alt="xrpl.js"></a>
  <a href="https://www.typescriptlang.org/"><img src="https://img.shields.io/badge/TypeScript-Active-3178C6.svg?style=flat-square&logo=typescript" alt="TypeScript"></a>
</p>

<p align="center">
  <strong>A <a href="https://github.com/anthropics/skills">Claude Code skill</a> for building dApps on the XRP Ledger.</strong>
  <br>
  <a href="https://xrpl.org/docs.html">XRPL Docs</a> · <a href="#quick-start">Quick Start</a> · <a href="https://github.com/XRPLF/xrpl.js">XRPL.js GitHub</a>
</p>

## What it does

This skill gives Claude Code deep knowledge of the Ripple/XRPL development stack so it can help you:

- **Scaffold** XRPL projects with `xrpl.js` and TypeScript
- **Write** scripts for Payments, Trust Lines, and Offers
- **Interact** with the XRP Ledger (Mainnet/Testnet)
- **Mint** and manage NFTs on XRPL
- **Connect** to the Decentralized Exchange (DEX)

## Quick Start

```bash
bash <(curl -s https://raw.githubusercontent.com/phamdat721101/ripple-dapp-skills/main/install.sh)
```

Then start Claude Code and ask it to build something:

```
> Create a script to send XRP
> Help me mint an NFT on XRPL
> Explain how TRUST LINES work
```

## Stack

| Layer | Tool | Notes |
|:------|:-----|:------|
| SDK | **xrpl.js** | Official JS/TS Library |
| Network | **XRPL** | Fast, low-cost public ledger |
| Wallet | **Xaman** | Signing transactions |
| Runtime | **Node.js 14+** | Required environment |

<details>
<summary><strong>Prerequisites</strong></summary>

<br>

- [Node.js](https://nodejs.org/) 14+
- [Git](https://git-scm.com/)
- VS Code (Recommended)

</details>

## Usage examples

Once installed, start a Claude Code session and try:

```
> Help me start a new XRPL dApp
> Write a script to issue a new token
> How do I check an account balance on XRPL?
> Create a helper function to connect to Testnet
```

## Skill structure

```
ripple-dapp-skills/
├── SKILL.md                            # Main skill definition
├── references/
│   ├── xrpl-concepts.md                # Core concepts
│   ├── xrpl-javascript-sdk.md          # SDK guide
│   └── xrpl-setup.md                   # Setup guide
├── install.sh
├── assets/
│   └── logo.png
└── README.md
```

## Resources

| Resource | Description |
|:---------|:------------|
| [XRPL Docs](https://xrpl.org/docs.html) | Official documentation |
| [XRPL Explorer](https://livenet.xrpl.org) | Block explorer |
| [XRPL.js](https://js.xrpl.org) | Client library docs |

## License

[MIT](LICENSE)
