import React, { useState } from "react";
import Filter from "./Filter";
import Item from "./Item";

function ShoppingList({ items }) {
  const [selectedCategory, setSelectedCategory] = useState("All");

  function handleCategoryChange(category) {
    console.log("Selected category in state:", category); // Log updated state
    setSelectedCategory(category);
  }

  // Filter items based on selected category
  const itemsToDisplay = items.filter((item) => {
    const match = selectedCategory === "All" || item.category === selectedCategory;
    console.log(`Item: ${item.name}, Match: ${match}`); // Log each item and match result
    return match;
  });

  console.log("Items to display:", itemsToDisplay); // Log filtered items

  return (
    <div className="ShoppingList">
      <Filter onCategoryChange={handleCategoryChange} />
      <ul className="Items">
        {itemsToDisplay.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;


