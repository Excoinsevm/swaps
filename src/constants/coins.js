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
    name: "PopTest",
    abbr: "PTEST",
    address: "0xF2C2f088bfd4f2c8067CAB8f0Dd0E1ebD3acf065",
  },
  {
    name: "PopTest",
    abbr: "2TEST",
    address: "0x46eF73b317Dc0413b18FCE4373a5a29786672D26",
  },
]

const COINS = new Map();
COINS.set(chains.ChainId.MAINNET, MAINNETCoins);
export default COINS
