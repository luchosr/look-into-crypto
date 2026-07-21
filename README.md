# 💹 Look Into Crypto

A cryptocurrency quoter app: pick a coin from the top cryptoassets by market cap, choose a fiat currency, and get its current price along with key market details.

<p align="center">
  <img src="https://img.shields.io/badge/React-18-61DAFB?logo=react&logoColor=white" alt="React" />
  <img src="https://img.shields.io/badge/TypeScript-5-3178C6?logo=typescript&logoColor=white" alt="TypeScript" />
  <img src="https://img.shields.io/badge/Vite-5-646CFF?logo=vite&logoColor=white" alt="Vite" />
  <img src="https://img.shields.io/badge/Zustand-state-000000" alt="Zustand" />
  <img src="https://img.shields.io/badge/Zod-validation-3E67B1" alt="Zod" />
  <img src="https://img.shields.io/badge/Axios-http-5A29E4?logo=axios&logoColor=white" alt="Axios" />
</p>

**🔗 Live demo:** [look-into-crypto.vercel.app](https://look-into-crypto.vercel.app/)

![Look Into Crypto screenshot](image/Main%20App.png)

## Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Getting Started](#getting-started)
- [Available Scripts](#available-scripts)
- [Project Structure](#project-structure)
- [How It Works](#how-it-works)
- [API Reference](#api-reference)
- [Deployment](#deployment)
- [License](#license)

## Features

- 🪙 **Browse top cryptoassets** — the coin list is loaded from the top 20 by market capitalization.
- 💱 **Multi-currency quotes** — get prices in USD, MXN, EUR, or GBP.
- 📊 **Live market details** — current price plus additional display data returned by the API.
- ✅ **Runtime-validated data** — every API response is parsed with Zod before it reaches the UI.
- ⏳ **Loading and error states** — a spinner while fetching and a clear message when the form is incomplete or a request fails.
- ⚡ **Fast dev experience** — Vite with the React SWC plugin.

## Tech Stack

| Area | Technology |
| --- | --- |
| Framework | [React 18](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/) |
| Build tool | [Vite](https://vitejs.dev/) (React SWC plugin) |
| State management | [Zustand](https://zustand-demo.pmnd.rs/) |
| Data validation | [Zod](https://zod.dev/) |
| HTTP client | [Axios](https://axios-http.com/) |
| Styling | Plain CSS with custom properties |
| Data source | [CryptoCompare API](https://min-api.cryptocompare.com/) |

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v18+ recommended)
- [pnpm](https://pnpm.io/) (this project ships a `pnpm-lock.yaml`)

### Installation

```bash
# Clone the repository
git clone https://github.com/luchosr/look-into-crypto.git
cd look-into-crypto

# Install dependencies
pnpm install

# Start the dev server
pnpm dev
```

Vite will print a local URL (by default `http://localhost:5173`) where the app is served.

## Available Scripts

| Script | Description |
| --- | --- |
| `pnpm dev` | Start the development server with hot reload. |
| `pnpm build` | Type-check (`tsc -b`) and build the production bundle. |
| `pnpm preview` | Preview the production build locally. |
| `pnpm lint` | Run ESLint over the project. |

## Project Structure

```
look-into-crypto/
├── image/                      # App screenshot and logo assets
├── public/                     # Static assets served as-is
├── services/
│   └── CryptoService.ts        # API calls (Axios) + Zod parsing
└── src/
    ├── components/
    │   ├── CryptoSearchForm.tsx   # Coin + currency selector
    │   ├── CryptopriceDisplay.tsx # Renders the quote result
    │   ├── ErrorMessage.tsx       # Validation / error feedback
    │   └── Spinner.tsx            # Loading indicator
    ├── data/
    │   └── index.ts            # Supported fiat currencies (USD, MXN, EUR, GBP)
    ├── schema/
    │   └── crypto-schema.ts    # Zod schemas for API responses
    ├── types/
    │   └── index.ts            # Shared TypeScript types
    ├── store.ts                # Zustand store (state + async actions)
    ├── App.tsx                 # Root component
    └── main.tsx                # App entry point
```

## How It Works

Application state lives in a single **Zustand store** (`store.ts`), so any component can read the crypto list, the selected pair, the current quote, and loading/error flags without prop drilling.

The data flow is:

1. On load, the store fetches the **top 20 cryptoassets by market cap** to populate the selector.
2. The user picks a cryptocurrency and a fiat currency in `CryptoSearchForm`.
3. `CryptoService.ts` requests the quote from CryptoCompare via Axios.
4. The response is validated with a **Zod schema** (`crypto-schema.ts`) using `safeParse` — only well-formed data is stored.
5. `CryptopriceDisplay` renders the result, while `Spinner` and `ErrorMessage` handle the loading and error states.

## API Reference

This project uses the free [CryptoCompare Min-API](https://min-api.cryptocompare.com/):

| Purpose | Endpoint |
| --- | --- |
| Top coins by market cap | `/data/top/mktcapfull?limit=20&tsym=USD` |
| Full price for a pair | `/data/pricemultifull?fsyms={crypto}&tsyms={currency}` |

The public endpoints used here don't require an API key.

## Deployment

The app is deployed on **Vercel**: [look-into-crypto.vercel.app](https://look-into-crypto.vercel.app/)

To deploy your own copy, build with `pnpm build` and serve the generated `dist/` folder on any static host (Vercel, Netlify, GitHub Pages, etc.).

## License

No license file is currently included. If you plan to make this reusable, consider adding one (e.g. [MIT](https://choosealicense.com/licenses/mit/)).
