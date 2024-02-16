import React from "react";
import "../CSS-components/HomeNav.css";
import NavLogos from "./navLogos";
import SearchBar from "./SearchBar";

export default function HomeNav(props) {
  function handleSearch(value) {
    console.log(value);
    // console.log(isSearch);
    props.handleSearch(value);
  }
  return (
    <div className="navContainer bg-gradient-to-b from-slate-950 to-slate-900 text-slate-200">
      <div>
        <img src="Logo.png" className=" h-10 md:h-20 lg:h-[3.5rem] mx-5"></img>
        <h1 className="nav--evently text-xl hidden lg:flex text-md lg:text-2xl mr-12 font-heading_font">
          Evently
        </h1>
      </div>
      <SearchBar handleSearch={handleSearch} />
      <NavLogos />
    </div>
  );
}
