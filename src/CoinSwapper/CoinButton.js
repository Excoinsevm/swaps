import React from "react";
import { ButtonBase, Grid, makeStyles, Typography } from "@material-ui/core";
import PropTypes from "prop-types";
import * as COLORS from "@material-ui/core/colors";

const useStyles = makeStyles((theme) => ({
  button: {
    width: "100%",
    paddingTop: theme.spacing(0.5),
    paddingBottom: theme.spacing(0.5),
    "&:hover, &$focusVisible": {
      backgroundColor: COLORS.grey[200],
    },
  },
  coinName: {
    opacity: 0.6,
  },
  coinLogo: {
    width: 500px, // Adjust size as needed
    height: 500px, // Adjust size as needed
    marginRight: theme.spacing(1), // Add spacing between logo and text
    borderRadius: "50%", // Ensure the logo is circular
  },
}));

CoinButton.propTypes = {
  coinName: PropTypes.string.isRequired,
  coinAbbr: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  logoUrl: PropTypes.string.isRequired, // Add logoUrl to PropTypes
};

export default function CoinButton(props) {
  const { coinName, coinAbbr, onClick, logoUrl } = props;
  const classes = useStyles();

  return (
    <ButtonBase focusRipple className={classes.button} onClick={onClick}>
      <Grid container direction="row" alignItems="center">
        {/* Token Logo */}
        <img src={logoUrl} alt={`${coinAbbr} Logo`} className={classes.coinLogo} />

        {/* Token Abbreviation and Name */}
        <Grid item>
          <Typography variant="h6">{coinAbbr}</Typography>
          <Typography variant="body2" className={classes.coinName}>
            {coinName}
          </Typography>
        </Grid>
      </Grid>
    </ButtonBase>
  );
}
