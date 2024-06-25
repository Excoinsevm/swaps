import React from 'react';
import { Box, Typography, makeStyles, Link, Paper } from '@material-ui/core';
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
    paddingTop: theme.spacing(8),
  },
  logo: {
    width: 150,
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
    marginBottom: theme.spacing(4),
  },
  squareContainer: {
    display: 'flex',
    justifyContent: 'space-around',
    marginTop: theme.spacing(4),
    marginBottom: theme.spacing(4),
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column',
      alignItems: 'center',
    },
  },
  square: {
    width: 300,
    minHeight: 200,
    padding: theme.spacing(3),
    textAlign: 'center',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
    borderRadius: theme.spacing(1),
    boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
    transition: 'transform 0.3s ease-in-out',
    '&:hover': {
      transform: 'scale(1.05)',
    },
    marginBottom: theme.spacing(3),
  },
  subtitle: {
    fontSize: '1.2rem',
    fontWeight: 'bold',
    marginBottom: theme.spacing(1),
  },
  paragraph: {
    fontSize: '1rem',
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
    color: '#333',
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

      <Box className={classes.squareContainer}>
        <Paper elevation={3} className={classes.square}>
          <Typography variant="h5" className={classes.subtitle}>
            Our Mission
          </Typography>
          <Typography variant="body2" className={classes.paragraph}>
            Empower users to trade cryptocurrencies with ease and security.
          </Typography>
        </Paper>
        <Paper elevation={3} className={classes.square}>
          <Typography variant="h5" className={classes.subtitle}>
            Vision
          </Typography>
          <Typography variant="body2" className={classes.paragraph}>
            Become the leading decentralized exchange platform on Bitrock.
          </Typography>
        </Paper>
      </Box>

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
