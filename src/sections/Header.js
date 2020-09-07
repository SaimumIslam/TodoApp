import React, { useEffect, useContext } from "react";
import clsx from "clsx";

import { makeStyles } from "@material-ui/core/styles";
import { LinearProgress, Typography } from "@material-ui/core";

import CircularProgressWithLabel from "../components/section/header/CircularProgressWithLabel";
import { TaskContextApi } from "../action/ContextApi";
import { getPercentages } from "../action/Algorithms";

const useStyles = makeStyles((theme) => ({
  root: ({ cover }) => {
    return {
      background: `url(${cover})`,
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover",
      backgroundPosition: "right",
      borderRadius: "1% 1% 0% 0%",
    };
  },
  heroTitle: {
    color: "#fff",
    padding: theme.spacing(3),
  },
  heroSub: {
    padding: theme.spacing(1, 1, 2, 3),
  },
  textColor: {
    color: "#fff",
  },
  side: {
    display: "flex",
    justifyContent: "space-between",
  },
  headerTitle: {
    margin: theme.spacing(3, 1, 0, 1),
  },
}));

const Header = () => {
  const cover = require("../data/image/cover.jpg");
  const classes = useStyles({ cover });

  const taskContext = useContext(TaskContextApi);
  const items = taskContext.tasks;

  const [progress, setProgress] = React.useState(0);

  useEffect(() => {
    setProgress((oldProgress) => {
      const diff = getPercentages(items) * 100;
      return Math.min(diff, 100);
    });
  }, [items]);

  return (
    <React.Fragment>
      <div className={classes.root}>
        <Typography variant='h2' className={classes.heroTitle}>
          Your
          <br />
          Things
        </Typography>
        <div className={clsx(classes.side, classes.heroSub)}>
          <Typography variant='subtitle1' className={classes.textColor}>
            {new Date().toString().slice(0, 15)}
          </Typography>
          <CircularProgressWithLabel value={progress} />
        </div>
      </div>
      <LinearProgress color='primary' variant='determinate' value={progress} />
    </React.Fragment>
  );
};

export default React.memo(Header);
