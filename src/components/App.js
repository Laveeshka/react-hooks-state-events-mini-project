import React, { useState } from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";
console.log("Here's the data you're working with");
console.log({ CATEGORIES, TASKS });

function App() {
  //tasks state
  const [tasks, setTasks] = useState(TASKS);
  const [category, setCategory] = useState("All");

  function removeTask(text){
    const newTasks = tasks.filter(task => task.text !== text);
    setTasks(newTasks);
  }

  function handleSelectedCategory(selectedCategory){
    setCategory(selectedCategory);
  }

  //filter tasks based on category
  // The list of tasks being displayed should be filtered, so that only tasks that match the category that was clicked are displayed. Filter as usual
  // If the button for "All" is selected, all the tasks should be displayed. Do that by performing a check on the value of category state
  const filteredTasks = tasks.filter((task) => {
    if (category === "All"){
      return true;
    }
    else {
      return task.category === category;
    }
  })

  function addTask(task){
    const newTasks = [...tasks, task];
    setTasks(newTasks);
  }

  //pass filteredTasks instead of tasks as prop in TaskList
  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter categories={CATEGORIES} selectedCategory={category} handleSelectedCategory={handleSelectedCategory}/>
      <NewTaskForm categories={CATEGORIES} onTaskFormSubmit={addTask}/>
      <TaskList tasksData={filteredTasks} removeTask={removeTask}/> 
    </div>
  );
}

export default App;
