import React from "react";
import Task from "./Task";

function TaskList({ tasksData, removeTask }) {

  let tasks = tasksData.map((taskData, index) => {
    return <Task removeTask={removeTask} key={index} text={taskData.text} category={taskData.category}/>
  })

  return (
    <div className="tasks">
      {/* display a list of tasks using Task component */
      tasks
      }
    </div>
  );
}

export default TaskList;
