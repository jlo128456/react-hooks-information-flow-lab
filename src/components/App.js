import React, { useState } from "react";
import Header from "./Header";
import ShoppingList from "./ShoppingList";
import itemData from "../data/items";


function App() {
  // State variable for toggling dark mode
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Determine the app's CSS class based on the dark mode state
  const appClass = isDarkMode ? "App dark" : "App light";

  // Function to handle dark mode toggle
  function handleDarkMode() {
    setIsDarkMode((prevMode) => !prevMode);
  }

  return (
    <div className={appClass}>
      <Header isDarkMode={isDarkMode} onDarkModeClick={handleDarkMode}/>
      <ShoppingList items={itemData} />
    </div>
  );
}

export default App;
