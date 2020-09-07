import React from "react";
import { initialTasks, TaskContextApi } from "../../../action/ContextApi";
import { getDbTask, setDbTask } from "../../../action/StorageApi";

export default function TaskProvider(props) {
  const push = (task) => {
    setTasks((prev) => ({
      ...prev,
      tasks: [...prev.tasks, task],
    }));
  };

  const setAllTasks = (tasks) => {
    setTasks((prev) => ({
      ...prev,
      tasks: tasks,
    }));
  };

  const [tasks, setTasks] = React.useState({
    ...initialTasks,
    setAllTasks: setAllTasks,
    push: push,
  });

  React.useEffect(() => {
    const alltasks = getDbTask();
    setAllTasks(alltasks);
  }, []);

  window.onunload = () => {
    setDbTask(tasks);
  };

  return (
    <TaskContextApi.Provider value={tasks}>
      {props.children}
    </TaskContextApi.Provider>
  );
}
