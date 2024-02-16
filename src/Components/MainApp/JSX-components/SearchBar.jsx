import React from "react";
import { FaSearchLocation } from "react-icons/fa";

export default function SearchBar(props) {
  function handleSearch(item) {
    props.handleSearch(item.target.value);
  }

  return (
    <div>
      <FaSearchLocation
        className="reactIcon hover:shadow-slate-300 shadow-xl"
        id="searchIcon"
      />
      <input
        type="text"
        className="searchBar focus:bg-slate-200 focus:text-slate-950"
        id="searchBar"
        placeholder="Search events "
        onChange={handleSearch}
      />
    </div>
  );
}
