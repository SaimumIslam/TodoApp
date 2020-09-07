import React from "react";
import PropTypes from "prop-types";

import { CircularProgress, Typography } from "@material-ui/core";

import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    alignItems: "center",
  },
  containr: {
    position: "relative",
    display: "inline-flex",
    marginRight: theme.spacing(1),
  },
  middleText: {
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    position: "absolute",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
}));

const CircularProgressWithLabel = (props) => {
  const classes = useStyles();
  const { textClass, value, ...rest } = props;

  return (
    <div className={classes.root}>
      <div className={classes.containr}>
        <CircularProgress
          variant='static'
          thickness={3}
          value={value}
          {...rest}
        />
        <Typography
          variant='caption'
          component='div'
          color='textSecondary'
          className={classes.middleText}
        >
          {`${Math.round(value)}%`}
        </Typography>
      </div>
      <Typography variant='caption' component='div' color='textSecondary'>
        complete
      </Typography>
    </div>
  );
};

CircularProgressWithLabel.propTypes = {
  value: PropTypes.number.isRequired,
};

export default React.memo(CircularProgressWithLabel);
