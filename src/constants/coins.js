import * as chains from './chains';
import popcatLogo from '../CoinLogos/popcat.png';

const MAINNETCoins = [
 {
    name: "Bitrock",
    abbr: "BROCK",
    address: "", // Weth address is fetched from the router
    logoUrl: "https://example.com/bitrock-logo.png", // Replace with actual logo URL
  },
  {
    name: "PopCatRock",
    abbr: "POPCAT",
    address: "0xdce5726e3bc8e1f574416978279bb0ae62ab3c15",
    logoUrl: popcatLogo, // Replace with actual logo URL
  },
  {
    name: "PopTest5",
    abbr: "POP5",
    address: "0xa54DCe9037f64cF2Bf60EF4602cdF65d3095D844",
    logoUrl: "https://example.com/poptest5-logo.png", // Replace with actual logo URL
  },
]

const COINS = new Map();
COINS.set(chains.ChainId.MAINNET, MAINNETCoins);
export default COINS
