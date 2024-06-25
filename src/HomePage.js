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
    position: 'relative',
    textAlign: 'center',
  },
  logo: {
    width: 150, // Adjust size as needed
    marginBottom: theme.spacing(2),
  },
  title: {
    fontSize: '3rem',
    fontWeight: 'bold',
    marginBottom: theme.spacing(2),
  },
  description: {
    fontSize: '1.5rem',
    maxWidth: 600,
    margin: '0 auto',
  },
}));

const HomePage = () => {
  const classes = useStyles();

  return (
    <Box className={classes.container}>
      <img src="https://popcatrock.xyz/assets/popcatr.png" alt="Logo" className={classes.logo} />
      <Typography variant="h1" className={classes.title}>
        Welcome to PopSwap
      </Typography>
      <Typography variant="body1" className={classes.description}>
        PopSwap is a decentralized exchange platform built with React and Bitrock.
        Swap cryptocurrencies securely and efficiently.
      </Typography>
      {/* Add more content or components as needed */}
    </Box>
  );
};

export default HomePage;
