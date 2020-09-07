import React, { useEffect, useState } from "react";

import { MuiPickersUtilsProvider } from "@material-ui/pickers";
import { KeyboardTimePicker } from "@material-ui/pickers";
import DateFnsUtils from "@date-io/date-fns";

import { TextField, Input, Grid } from "@material-ui/core";
import { FormControl, Select } from "@material-ui/core";
import { Button, InputLabel, Typography } from "@material-ui/core";

import { TypeItems } from "../../../data/DummyData";
import { TaskContextApi } from "../../../action/ContextApi";

import { withStyles } from "@material-ui/core/styles";

const Error = withStyles((theme) => ({
  root: {
    color: "rgba(255, 0, 0)",
    fontSize: 12,
  },
}))(Typography);

const Form = (props) => {
  //taskContext api
  const taskContext = React.useContext(TaskContextApi);
  const { dialogueClose } = props;

  const addTasks = (task) => {
    taskContext.push(task);
  };

  const [alerTitle, setAlerTitle] = useState("Please write something");

  const [state, setstate] = useState({
    title: "",
    note: "",
    type: "Repeat",
    time: new Date(),
    done: false,
  });

  const handleChange = (event) => {
    const { id, value } = event.target;
    setstate((prev) => ({
      ...prev,
      [id]: value,
    }));
  };

  const handleDateChange = (date) => {
    setstate((prev) => ({ ...prev, time: date }));
  };

  const handleClick = (event) => {
    addTasks(state);
    dialogueClose();
    event.preventDefault();
  };

  const checkTask = (state) => {
    if (state.title === "") {
      setAlerTitle("* Please add a title");
    } else {
      setAlerTitle("");
    }
  };

  useEffect(() => {
    checkTask(state);
  }, [state]);

  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <TextField
          autoFocus
          required
          id='title'
          label='Title'
          type='text'
          fullWidth
          value={state.title}
          onChange={handleChange}
        />
      </Grid>
      <Grid item xs={12}>
        <TextField
          id='note'
          label='Note'
          type='text'
          fullWidth
          value={state.note}
          onChange={handleChange}
        />
      </Grid>
      <Grid item xs={12}>
        <FormControl fullWidth>
          <InputLabel htmlFor='type'>Type</InputLabel>
          <Select
            native
            value={state.type}
            id='type'
            onChange={handleChange}
            input={<Input id='listType' />}
          >
            <option aria-label='None' value='Repeat' />
            {TypeItems.map((type) => (
              <option key={type} value={type}>
                {type}
              </option>
            ))}
          </Select>
        </FormControl>
      </Grid>
      <Grid item xs={12}>
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
          <KeyboardTimePicker
            fullWidth
            label='Time'
            placeholder='HH:MM AM/PM'
            mask='__:__ _M'
            value={state.time}
            onChange={handleDateChange}
          />
        </MuiPickersUtilsProvider>
      </Grid>
      <Grid item xs={12} />
      <Grid item xs={12}>
        <Button
          fullWidth
          variant='outlined'
          color='secondary'
          size='small'
          disabled={Boolean(alerTitle)}
          onClick={handleClick}
        >
          Create
        </Button>
      </Grid>
      <Grid item xs={12}>
        {alerTitle && <Error>{alerTitle}</Error>}
      </Grid>
    </Grid>
  );
};
export default React.memo(Form);
