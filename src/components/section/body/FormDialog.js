import React, { forwardRef, useImperativeHandle } from "react";

import { IconButton, Typography } from "@material-ui/core";
import { Dialog, DialogTitle } from "@material-ui/core";
import { DialogContent } from "@material-ui/core";

import CloseIcon from "@material-ui/icons/Close";
import Form from "./Form";

import { withStyles } from "@material-ui/core/styles";

const styles = (theme) => ({
  root: {
    margin: 0,
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: theme.spacing(1, 2, 0, 3),
  },
});

const CustomDialogTitle = withStyles(styles)((props) => {
  const { children, classes, onClose, ...other } = props;

  return (
    <DialogTitle disableTypography className={classes.root} {...other}>
      <Typography variant='h6'>{children}</Typography>
      {onClose && (
        <IconButton className={classes.closeButton} onClick={onClose}>
          <CloseIcon />
        </IconButton>
      )}
    </DialogTitle>
  );
});

const FormDialog = forwardRef((props, ref) => {
  const [open, setOpen] = React.useState(false);

  const handleClose = () => {
    setOpen(false);
  };

  useImperativeHandle(ref, () => ({
    openDrawer() {
      setOpen(true);
    },
  }));

  return (
    <Dialog open={open} onClose={handleClose} maxWidth='xs'>
      <CustomDialogTitle onClose={handleClose}>Add Your Task</CustomDialogTitle>
      <DialogContent style={{ paddingTop: 0 }}>
        <Form dialogueClose={handleClose} />
      </DialogContent>
    </Dialog>
  );
});

export default React.memo(FormDialog);
