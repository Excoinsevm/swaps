// App.js

import React from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import { SnackbarProvider } from 'notistack';
import { createTheme, ThemeProvider } from '@material-ui/core/styles';
import Web3Provider from './network';
import NavBar from './NavBar/NavBar';
import CoinSwapper from './CoinSwapper/CoinSwapper';
import Liquidity from './Liquidity/Liquidity';
import HomePage from './HomePage'; // Import the HomePage component

const theme = createTheme({
  palette: {
    primary: {
      main: '#ff0000',
      contrastText: '#ffffff',
    },
    secondary: {
      main: '#9e9e9e',
      contrastText: '#ffffff',
    },
  },
});

const App = () => {
  return (
    <div className="App">
      <SnackbarProvider maxSnack={3}>
        <ThemeProvider theme={theme}>
          <Web3Provider
            render={(network) => (
              <div>
                <NavBar />
                <Switch>
                  <Route exact path="/">
                    <HomePage />
                  </Route>
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
