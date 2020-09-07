const tableName = "tasks";

export const setDbTask = (tasks) => {
  try {
    localStorage.setItem(tableName, JSON.stringify(tasks));
  } catch (error) {
    console.log(error);
  }
};

export const getDbTask = () => {
  try {
    const tasks = JSON.parse(localStorage.getItem(tableName));

    //Avoid null value
    if (tasks) {
      return tasks.tasks;
    } else {
      return [];
    }
  } catch (error) {
    console.log(error);
    return [];
  }
};

export const removeDbTask = () => {
  try {
    localStorage.removeItem(tableName);
  } catch (error) {
    console.log(error);
  }
};
