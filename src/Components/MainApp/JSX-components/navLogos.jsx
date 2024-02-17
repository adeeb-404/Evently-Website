import React, { useEffect, useState } from "react";
import { FaBell } from "react-icons/fa";
import { IoMdSettings } from "react-icons/io";
import { CgProfile } from "react-icons/cg";

const NavLogos = () => {
  const [name, setname] = useState("");
  useEffect(() => {
    let name = localStorage.getItem("username");
    name = name.charAt(0).toUpperCase() + name.slice(1);
    setname(name);
  }, []);
  // setname(localStorage.getItem("username"));
  return (
    <>
      <div>
        <FaBell
          className="reactIcon hover:shadow-slate-300 shadow-xl"
          id="settingsIcon"
        />
        <a href="https://www.youtube.com/">
          <IoMdSettings className="reactIcon hover:shadow-slate-300 shadow-xl" />
        </a>
        <h2>Welcome {name}</h2>
        <CgProfile
          className="reactIcon hover:shadow-slate-300 shadow-xl"
          id="profileIcon"
        />
      </div>
    </>
  );
};

export default NavLogos;
