import React from "react";

import ErrorBoundary from "./components/hoc/ErrorBoundary"; //show if any error occur
import AppContext from "./components/hoc/AppContext"; //context api provider

import Header from "./sections/Header";
import Body from "./sections/Body";
import TimeLine from "./sections/TimeLine"; //for desktop view
import TodoList from "./sections/TodoList"; //for mobile and tab view

import { makeStyles } from "@material-ui/core/styles";
import { Hidden } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "70%",
    },
    margin: "0 auto",
  },
}));

const App = () => {
  const classes = useStyles();

  return (
    <AppContext>
      <div className={classes.root}>
        <ErrorBoundary>
          <Header />
        </ErrorBoundary>
        <ErrorBoundary>
          <Body />
        </ErrorBoundary>
        <ErrorBoundary>
          <Hidden smDown>
            <TimeLine />
          </Hidden>
        </ErrorBoundary>
        <ErrorBoundary>
          <Hidden mdUp>
            <TodoList />
          </Hidden>
        </ErrorBoundary>
      </div>
    </AppContext>
  );
};

export default App;
