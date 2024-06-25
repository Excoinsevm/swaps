// 

import React from 'react';
import { Box, Typography, makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  container: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: '100vh',
    padding: theme.spacing(3),
  },
  title: {
    marginBottom: theme.spacing(2),
    fontSize: '2rem',
    color: theme.palette.primary.main,
  },
  description: {
    color: theme.palette.secondary.main,
  },
}));

const HomePage = () => {
  const classes = useStyles();

  return (
    <Box className={classes.container}>
      <Typography variant="h1" className={classes.title}>
        Welcome to React Uniswap
      </Typography>
      <Typography variant="body1" className={classes.description}>
        React Uniswap is a decentralized exchange platform built with React and Ethereum.
        Swap cryptocurrencies securely and efficiently.
      </Typography>
      {/* Add more content or components as needed */}
    </Box>
  );
};

export default HomePage;
