import * as chains from './chains';

const MAINNETCoins = [
 {
    name: "Bitrock",
    abbr: "BROCK",
    address: "", // Weth address is fetched from the router
    logoUrl: "https://example.com/bitrock-logo.png", // Replace with actual logo URL
  },
  {
    name: "PopSwap",
    abbr: "PSWAP",
    address: "0xCf65EFCebdfDd91a16F0211d1A194EB6bDB50a0E",
    logoUrl: "https://i.imgur.com/qWwaaY9.jpeg", // Replace with actual logo URL
  },
]

const COINS = new Map();
COINS.set(chains.ChainId.MAINNET, MAINNETCoins);
export default COINS
