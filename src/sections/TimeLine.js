import React from "react";

import { Paper, Typography } from "@material-ui/core";
import { Timeline, TimelineItem } from "@material-ui/lab";
import { TimelineSeparator, TimelineConnector } from "@material-ui/lab";
import { TimelineContent, TimelineDot } from "@material-ui/lab";
import { TimelineOppositeContent } from "@material-ui/lab";

import Skeleton from "../components/section/timeline/Skeleton"; //load before at least 3 tasks

import { IconButton } from "@material-ui/core";
import CloseIcon from "@material-ui/icons/Close";
import CheckIcon from "@material-ui/icons/Check";

import { IconType } from "../data/DummyData";
import { TaskContextApi } from "../action/ContextApi";
import { formatTime, sortTasks } from "../action/Algorithms";

import { makeStyles } from "@material-ui/core/styles";

const ActionButtons = React.memo((props) => {
  const { item } = props;

  const taskContext = React.useContext(TaskContextApi);
  const items = taskContext.tasks;

  const handleDone = (task) => {
    const newTasks = items.map((item) =>
      item.title === task.title ? { ...item, done: !item.done } : item
    );
    taskContext.setAllTasks(newTasks);
  };

  const handleRemove = (task) => {
    const newTasks = items.filter((item) => item.title !== task.title);
    taskContext.setAllTasks(newTasks);
  };

  return (
    <React.Fragment>
      <IconButton
        edge='end'
        aria-label='done'
        color={item.done ? "primary" : "default"}
        onClick={() => handleDone(item)}
      >
        <CheckIcon />
      </IconButton>
      <IconButton
        edge='end'
        aria-label='delete'
        onClick={() => handleRemove(item)}
      >
        <CloseIcon />
      </IconButton>
    </React.Fragment>
  );
});

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: "6px 16px",
  },
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

export default function CustomizedTimeline() {
  const classes = useStyles();

  const taskContext = React.useContext(TaskContextApi);
  const items = sortTasks(taskContext.tasks);

  const itemLen = items.length;

  return (
    <Timeline align='alternate'>
      {items.map((item, index) => (
        <TimelineItem key={item.title}>
          <TimelineOppositeContent>
            <Typography variant='body2'>{formatTime(item.time)}</Typography>
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot
              color={IconType[item.type].color}
              variant={IconType[item.type].variant}
            >
              {IconType[item.type].icon}
            </TimelineDot>
            {itemLen - 1 > index && (
              <TimelineConnector className={classes.secondaryTail} />
            )}
          </TimelineSeparator>
          <TimelineContent>
            <Paper elevation={3} className={classes.paper}>
              <div className={classes.side}>
                {index % 2 === 1 && (
                  <React.Fragment>
                    <div className={classes.updown}>
                      <ActionButtons item={item} />
                    </div>
                    {item.done && (
                      <div className={classes.updown}>
                        <Typography variant='h6' color='primary'>
                          done
                        </Typography>
                      </div>
                    )}
                  </React.Fragment>
                )}
                <div className={classes.updown}>
                  <Typography variant='h6'>{item.title}</Typography>
                  <Typography color='textSecondary'>{item.note}</Typography>
                </div>
                {index % 2 === 0 && (
                  <React.Fragment>
                    {item.done && (
                      <div className={classes.updown}>
                        <Typography variant='h6' color='primary'>
                          done
                        </Typography>
                      </div>
                    )}
                    <div className={classes.updown}>
                      <ActionButtons item={item} />
                    </div>
                  </React.Fragment>
                )}
              </div>
            </Paper>
          </TimelineContent>
        </TimelineItem>
      ))}
      {itemLen < 3 ? <Skeleton /> : <></>}
    </Timeline>
  );
}
