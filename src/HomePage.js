import React from 'react';
import { Box, Typography, makeStyles, Link } from '@material-ui/core';
import TwitterIcon from '@material-ui/icons/Twitter';
import TelegramIcon from '@material-ui/icons/Telegram';

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
    paddingTop: theme.spacing(8), // Adjust spacing from top
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
    marginBottom: theme.spacing(4), // Add extra margin bottom
  },
  footer: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    backgroundColor: '#f0f0f0',
    padding: theme.spacing(2),
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  icon: {
    fontSize: '2rem',
    margin: theme.spacing(0, 1),
    color: '#333', // Adjust icon color
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

      <Box className={classes.footer}>
        <Link href="https://twitter.com/example" target="_blank" rel="noopener noreferrer">
          <TwitterIcon className={classes.icon} />
        </Link>
        <Link href="https://telegram.me/example" target="_blank" rel="noopener noreferrer">
          <TelegramIcon className={classes.icon} />
        </Link>
      </Box>
    </Box>
  );
};

export default HomePage;
