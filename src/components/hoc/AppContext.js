import React from "react";
import TaskProvider from "./context/TaskProvider";

export default function AppContext(props) {
  return <TaskProvider>{props.children}</TaskProvider>;
}
