import React, { useState } from "react";

function NewTaskForm({ categories, onTaskFormSubmit }) {
  //create two state variables, text and category
  const [text, setText] = useState("");
  const [category, setCategory] = useState("Code") //"Code" is next in the list of categories after "All"

  //display <option> elements for each category inside of the <select> element except the "All" category, so that the user can select a category when adding a new task
  //Remember method chaining!
  const options = categories
    .filter((category) => category !== "All")
    .map((category) => {
      return (<option value={category} key={category}>{category}</option>)
    })


    function handleSubmit(event){
      event.preventDefault();
      //invoke onTaskFormSubmit here and pass object
      const newTaskObj = {
        text,
        category
      }
      onTaskFormSubmit(newTaskObj);
    }

    function handleChange(event){
      const name = event.target.name;
      if (name === "text"){
        setText(event.target.value);
      }
      if (name === "category"){
        setCategory(event.target.value);
      }
    }

  return (
    <form onSubmit={handleSubmit} className="new-task-form">
      <label>
        Details
        <input type="text" name="text" onChange={(handleChange)}/>
      </label>
      <label>
        Category
        <select name="category" onChange={handleChange}>
          {options}
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;
