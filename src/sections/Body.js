import React from "react";
import clsx from "clsx"; //add multiple css class

import { Button, Typography } from "@material-ui/core";

import AddIcon from "@material-ui/icons/Add";
import DeleteIcon from "@material-ui/icons/Delete";

import FormDialog from "../components/section/body/FormDialog";
import { TaskContextApi } from "../action/ContextApi";
import { removeDbTask } from "../action/StorageApi";

import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  side: {
    display: "flex",
    justifyContent: "space-between",
  },
  headerTitle: {
    margin: theme.spacing(3, 1, 0, 1),
  },
}));

const Body = () => {
  const classes = useStyles();
  const childRef = React.useRef(null);

  const taskContext = React.useContext(TaskContextApi);

  const handleClear = (task) => {
    taskContext.setAllTasks([]);
    removeDbTask();
  };

  const handleOpenDrawer = () => {
    childRef.current.openDrawer();
  };

  return (
    <div className={clsx(classes.side, classes.headerTitle)}>
      <Typography variant='h5'>You have 10 tasks to complete</Typography>
      <div>
        <Button
          color='primary'
          startIcon={<AddIcon />}
          onClick={handleOpenDrawer}
        >
          Add
        </Button>
        <Button
          color='secondary'
          startIcon={<DeleteIcon />}
          onClick={handleClear}
        >
          Clear
        </Button>
      </div>
      <FormDialog ref={childRef} />
    </div>
  );
};

export default React.memo(Body);
