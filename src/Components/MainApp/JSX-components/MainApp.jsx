import React, { useState } from "react";
import "../CSS-components/App.css";
import HomeNav from "./homeNav.jsx";
import HomeBody from "./HomeBody.jsx";

function MainApp() {
  const [searchValue, setSearchValue] = useState("");
  function handleSearch(value) {
    setSearchValue(value);
  }

  console.log(searchValue);
  return (
    <div className="h-full">
      <HomeNav handleSearch={handleSearch} />
      <HomeBody searchValue={searchValue} />
    </div>
  );
}

export default MainApp;
