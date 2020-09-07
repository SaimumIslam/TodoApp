import React from "react";

//Task Context Api
export const initialTasks = {
  tasks: [],
  setAllTasks: () => {},
  push: () => {},
};
export const TaskContextApi = React.createContext(initialTasks);
