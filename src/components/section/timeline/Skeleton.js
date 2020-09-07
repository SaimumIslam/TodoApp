import React from "react";

import { Paper, Typography, Avatar } from "@material-ui/core";
import { TimelineItem, Skeleton } from "@material-ui/lab";
import { TimelineSeparator, TimelineConnector } from "@material-ui/lab";
import { TimelineContent } from "@material-ui/lab";
import { TimelineOppositeContent } from "@material-ui/lab";

import { IconButton } from "@material-ui/core";
import CloseIcon from "@material-ui/icons/Close";
import CheckIcon from "@material-ui/icons/Check";

import { makeStyles } from "@material-ui/core/styles";

const ActionButtons = React.memo((props) => {
  return (
    <React.Fragment>
      <IconButton edge='end' aria-label='done'>
        <CheckIcon />
      </IconButton>
      <IconButton edge='end' aria-label='delete'>
        <CloseIcon />
      </IconButton>
    </React.Fragment>
  );
});

const useStyles = makeStyles((theme) => ({
  secondaryTail: {
    backgroundColor: theme.palette.secondary.main,
  },
  side: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  updown: {
    display: "flex",
    flexDirection: "column",
  },
}));

const TimelineSkeleton = () => {
  const classes = useStyles();
  const Items = [1, 2, 3];
  const itemLen = Items.length;

  return (
    <React.Fragment>
      {Items.map((item, index) => (
        <TimelineItem key={index}>
          <TimelineOppositeContent>
            <Typography variant='body2'></Typography>
          </TimelineOppositeContent>
          <TimelineSeparator>
            <Skeleton variant='circle'>
              <Avatar />
            </Skeleton>
            {itemLen - 1 > index && <TimelineConnector />}
          </TimelineSeparator>
          <TimelineContent>
            <Paper elevation={3}>
              <Skeleton variant='rect' width='100%'>
                <div className={classes.updown}>
                  <ActionButtons />
                </div>
              </Skeleton>
            </Paper>
          </TimelineContent>
        </TimelineItem>
      ))}
    </React.Fragment>
  );
};
export default React.memo(TimelineSkeleton);
