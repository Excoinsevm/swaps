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
    padding: theme.spacing(3),
    textAlign: "center",
  },
  title: {
    marginBottom: theme.spacing(2),
    color: theme.palette.primary.main,
  },
  description: {
    marginBottom: theme.spacing(4),
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
                  <Typography variant="h4" className={classes.title}>
                    Welcome to SwapDApp
                  </Typography>
                  <Typography variant="body1" className={classes.description}>
                    SwapDApp is a decentralized application that allows users to
                    exchange one cryptocurrency for another directly from their
                    wallets. Enjoy seamless and secure swaps without the need for
                    intermediaries.
                  </Typography>
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
