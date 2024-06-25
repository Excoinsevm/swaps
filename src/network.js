import { useEffect, useState, useRef } from "react";
import { ethers } from "ethers";
import { createTheme } from "@material-ui/core";
import ConnectWalletPage from "./Components/connectWalletPage";
import {
  getAccount,
  getFactory,
  getRouter,
  getNetwork,
  getWeth,
} from "./ethereumFunctions";
import COINS from "./constants/coins";
import { network as chain, routerAddress } from "./constants/chains";

const theme = createTheme({
  palette: {
    primary: {
      main: "#ff0000",
      contrastText: "#ffffff",
    },
    secondary: {
      main: "#9e9e9e",
      contrastText: "#ffffff",
    },
  },
});

const autoReconnectDelay = 5000;

const Web3Provider = (props) => {
  const [isConnected, setConnected] = useState(false);
  const network = useRef({
    provider: null,
    signer: null,
    account: null,
    coins: [],
    chainID: null,
    router: null,
    factory: null,
    weth: null,
  });
  const backgroundListener = useRef(null);

  async function setupConnection() {
    try {
      console.log('Setting up connection...');
      network.current.provider = new ethers.providers.Web3Provider(window.ethereum);
      network.current.signer = await network.current.provider.getSigner();
      network.current.account = await getAccount();
      network.current.chainID = chain.id;

      // Ensure we're on the correct network
      const { chainId } = await network.current.provider.getNetwork();
      if (chainId !== chain.id) {
        console.log("Wrong network mate.");
        setConnected(false);
        return;
      }

      // Set up router
      network.current.router = await getRouter(routerAddress, network.current.signer);

      // Get default coins for network
      network.current.coins = COINS.get(chain.id);

      // Get Weth address from router
      const wethAddress = await network.current.router.WETH();
      network.current.weth = getWeth(wethAddress, network.current.signer);
      network.current.coins[0].address = wethAddress;

      // Get the factory address from the router
      const factoryAddress = await network.current.router.factory();
      network.current.factory = getFactory(factoryAddress, network.current.signer);

      setConnected(true);
    } catch (e) {
      console.log(e);
      setConnected(false);
    }
  }

  async function createListener() {
    return setInterval(async () => {
      try {
        const account = await getAccount();
        if (account !== network.current.account) {
          await setupConnection();
        }
      } catch (e) {
        setConnected(false);
        await setupConnection();
      }
    }, 1000);
  }

  useEffect(() => {
    const initialize = async () => {
      console.log("Initial hook");
      await setupConnection();
      console.log("network: ", network.current);

      if (backgroundListener.current != null) {
        clearInterval(backgroundListener.current);
      }
      backgroundListener.current = createListener();
    };
    initialize();

    return () => clearInterval(backgroundListener.current);
  }, []);

  const renderNotConnected = () => {
    console.log("Rendering not connected");
    return (
      <div className="App">
        <ConnectWalletPage />
      </div>
    );
  };

  return (
    <>
      {!isConnected && renderNotConnected()}
      {isConnected && <div>{props.render(network.current)}</div>}
    </>
  );
};

export default Web3Provider;
