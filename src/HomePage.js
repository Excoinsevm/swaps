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
    backgroundImage: `https://popcatrock.xyz/assets/popcatr.png`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    position: 'relative',
    color: theme.palette.common.white,
    textAlign: 'center',
  },
  overlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Overlay to make text readable
  },
  title: {
    marginBottom: theme.spacing(2),
    fontSize: '3rem', // Larger title
    fontWeight: 'bold',
  },
  description: {
    fontSize: '1.5rem', // Larger description
    maxWidth: 600,
    margin: '0 auto', // Center the description text
  },
}));

const HomePage = () => {
  const classes = useStyles();

  return (
    <Box className={classes.container}>
      <div className={classes.overlay}></div>
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
