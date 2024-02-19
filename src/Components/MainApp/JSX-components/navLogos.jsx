import React, { useEffect, useState } from "react";
import { FaBell } from "react-icons/fa";
import { IoMdSettings } from "react-icons/io";
import { CgProfile } from "react-icons/cg";
import { useNavigate } from "react-router-dom";

const NavLogos = () => {
  const navigator = useNavigate();
  const [name, setname] = useState("");
  const [show, setshow] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    let name = localStorage.getItem("username");
    if (!name) {
      navigate("/");
    }
    name = name?.charAt(0)?.toUpperCase() + name?.slice(1);
    setname(name);
  }, []);
  // setname(localStorage.getItem("username"));
  async function handleLogOut() {
    localStorage.removeItem("username");
    localStorage.removeItem("fname");
    localStorage.removeItem("lname");
    navigator("/");
  }
  return (
    <>
      <div>
        {/* <FaBell
          className="reactIcon hover:shadow-slate-300 shadow-xl"
          id="settingsIcon"
        /> */}
        <div className="relative pb-1" onClick={() => setshow(!show)}>
          <IoMdSettings className="reactIcon    hover:shadow-slate-300 shadow-xl " />
        </div>
        {show && (
          <button
            onClick={handleLogOut}
            className=" absolute -bottom-12  z-1 bg-slate-900 p-3 hover:bg-black hover:shadow-slate-300 hover:shadow-lg border-2"
          >
            Log out
          </button>
        )}
        <h2>Welcome {name}</h2>
        <img
          src={`P${localStorage.getItem("pp")}.jpg`}
          className="reactIcon hover:shadow-slate-300 shadow-xl h-14 rounded-full"
          id="profileIcon"
          onClick={() => navigate("/Profile")}
        />
      </div>
    </>
  );
};

export default NavLogos;
