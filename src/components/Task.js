import React from "react";

function Task({ category, text, removeTask}) {

  function handleClick(){
    removeTask(text);
  }

  return (
    <div className="task">
      <div className="label">{category}</div>
      <div className="text">{text}</div>
      <button onClick={handleClick} className="delete">X</button>
    </div>
  );
}

export default Task;
