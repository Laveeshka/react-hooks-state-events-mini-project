import React from "react";
// When a button is clicked, the following should happen:

// Whichever button was clicked should have a class of selected. The other buttons should not have any class assigned.
// The list of tasks being displayed should be filtered, so that only tasks that match the category that was clicked are displayed.
// If the button for "All" is selected, all the tasks should be displayed.

function CategoryFilter({ categories , handleSelectedCategory, selectedCategory }) {

  const buttons = categories.map(category => {
    //evaluate if button should have a className of selected by comparing the selectedCategory state with the mapped category
    const classNameSelected = category === selectedCategory ? "selected" : null;
    return (<button type="text" onClick={() => handleSelectedCategory(category)} className={classNameSelected} key={category}>{category}</button>)
  })

  return (
    <div className="categories">
      <h5>Category filters</h5>
      {/* render <button> elements for each category here */
      buttons}
    </div>
  );
}

export default CategoryFilter;
