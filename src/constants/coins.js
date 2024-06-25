import * as chains from './chains';

const MAINNETCoins = [
  {
    name: "Bitrock",
    abbr: "BROCK",
    address: "", // Weth address is fetched from the router
  },
  {
    name: "PopCatRock",
    abbr: "POPCAT",
    address: "0xdce5726e3bc8e1f574416978279bb0ae62ab3c15",
  },
  {
    name: "Pop Bitrock",
    abbr: "PBROCK",
    address: "0x26eC84F702Ed08b7f2c77fF0806b53A647253666",
  },
]

const COINS = new Map();
COINS.set(chains.ChainId.MAINNET, MAINNETCoins);
export default COINS
