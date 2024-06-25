import React from "react";
import "./App.css";
import { ethers } from "ethers";
import Web3Provider from "./network";
import NavBar from "./NavBar/NavBar"; // Fixed typo
import CoinSwapper from "./CoinSwapper/CoinSwapper";
import { Route, Switch } from "react-router-dom"; // Added Switch
import { SnackbarProvider } from "notistack";
import Liquidity from "./Liquidity/Liquidity";
import { createTheme, ThemeProvider } from "@material-ui/core/styles"; // Corrected import
import { Box, Typography, makeStyles } from "@material-ui/core";

// Create styles using makeStyles
const useStyles = makeStyles((theme) => ({
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    minHeight: "80vh",
    flexDirection: "column",
    padding: theme.spacing(3),
  },
  box: {
    width: "100%",
    maxWidth: 600,
    padding: theme.spacing(3),
    marginBottom: theme.spacing(3),
    textAlign: "center",
    boxShadow: "0 0 10px rgba(0,0,0,0.1)",
    borderRadius: 8,
    backgroundColor: "#ffffff",
  },
  title: {
    marginBottom: theme.spacing(2),
    color: theme.palette.primary.main,
  },
  description: {
    color: theme.palette.secondary.main,
  },
}));

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

const App = () => {
  const classes = useStyles();

  return (
    <div className="App">
      <SnackbarProvider maxSnack={3}>
        <ThemeProvider theme={theme}>
          <Web3Provider
            render={(network) => (
              <div>
                <NavBar />
                <Box className={classes.container}>
                  <Box className={classes.box}>
                    <Typography variant="h4" className={classes.title}>
                      What is a Decentralized Exchange (DEX)?
                    </Typography>
                    <Typography variant="body1" className={classes.description}>
                      A decentralized exchange (DEX) is a cryptocurrency exchange
                      that operates without a central authority or intermediary.
                      Users can trade cryptocurrencies directly with each other
                      using smart contracts.
                    </Typography>
                  </Box>
                  <Box className={classes.box}>
                    <Typography variant="h4" className={classes.title}>
                      PopSwap brought to you by PopCatDev
                    </Typography>
                    <Typography variant="body1" className={classes.description}>
                      PopSwap is a decentralized application (DApp) built by
                      PopCatDev. It enables users to swap cryptocurrencies
                      securely and efficiently on the Ethereum blockchain.
                    </Typography>
                  </Box>
                </Box>
                <Switch>
                  <Route exact path="/swap/">
                    <CoinSwapper network={network} />
                  </Route>

                  <Route exact path="/liquidity/">
                    <Liquidity network={network} />
                  </Route>
                </Switch>
              </div>
            )}
          />
        </ThemeProvider>
      </SnackbarProvider>
    </div>
  );
};

export default App;
