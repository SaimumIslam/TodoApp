export const formatTime = (time) => {
  let date = new Date(time);
  let hours = date.getHours();
  let minutes = date.getMinutes();
  let ampm = hours >= 12 ? "pm" : "am";
  hours = hours % 12;
  hours = hours ? hours : 12; // the hour '0' should be '12'
  minutes = minutes < 10 ? "0" + minutes : minutes;
  let strTime = hours + ":" + minutes + " " + ampm;
  return strTime;
};

export const sortTasks = (tasks) => {
  tasks.sort(
    (taskA, taskB) =>
      new Date(taskA.time) - new Date(taskB.time) && taskA.done - taskB.done
  );
  return tasks;
};

export const getPercentages = (items) => {
  const doneTasks = items.filter((item) => item.done === true);
  const totalTaskLen = items.length;
  const doneTaskLen = doneTasks.length;
  if (totalTaskLen === 0) {
    return 0;
  }
  return doneTaskLen / totalTaskLen;
};
