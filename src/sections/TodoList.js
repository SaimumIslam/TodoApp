import React from "react";

import { List, ListItemAvatar } from "@material-ui/core";
import { ListItem, ListItemText } from "@material-ui/core";
import { Avatar, IconButton } from "@material-ui/core";
import { ListItemSecondaryAction } from "@material-ui/core";

import Skeleton from "../components/section/todo/Skeleton"; //load before at least 3 tasks

import CloseIcon from "@material-ui/icons/Close";
import CheckIcon from "@material-ui/icons/Check";

import { IconType } from "../data/DummyData";
import { TaskContextApi } from "../action/ContextApi";
import { formatTime, sortTasks } from "../action/Algorithms";

import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    backgroundColor: theme.palette.background.paper,
  },
}));

export default function TodoList() {
  const classes = useStyles();
  const taskContext = React.useContext(TaskContextApi);

  const items = sortTasks(taskContext.tasks);

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
    <List className={classes.root}>
      {items.map((item) => (
        <ListItem divider key={item.title}>
          <ListItemAvatar>
            <Avatar imgProps={{ backgroundColor: "#000" }}>
              {IconType[item.type].icon}
            </Avatar>
          </ListItemAvatar>
          <ListItemText primary={item.title} secondary={item.note} />
          <ListItemText secondary={formatTime(item.time)} />
          {item.done && (
            <ListItemText
              primary='done'
              primaryTypographyProps={{ color: "primary" }}
            />
          )}

          <ListItemSecondaryAction>
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
          </ListItemSecondaryAction>
        </ListItem>
      ))}
      {items.length < 3 ? <Skeleton /> : <></>}
    </List>
  );
}
