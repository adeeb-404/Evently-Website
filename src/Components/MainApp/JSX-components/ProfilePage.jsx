import React, { useState, useEffect } from "react";
import "../CSS-components/ProfilePage.css";
import { HiPencilSquare } from "react-icons/hi2";
import { useNavigate } from "react-router-dom";

const ProfilePage = () => {
  const navigate = useNavigate();

  const [passive, setPassive] = useState("hidden");
  const [profilePics, setProfilePics] = useState("hidden");
  const [profile, setProfile] = useState(
    localStorage.getItem("pp") ? localStorage.getItem("pp") : 0
  );

  useEffect(() => {
    let name = localStorage.getItem("username");
    if (!name) {
      navigate("/");
    }
  }, []);

  function handleProfileClick() {
    setProfilePics((prev) => (prev == "hidden" ? "block" : "hidden"));
  }

  async function handleSaveClick() {
    localStorage.setItem("pp", profile);
    const username = localStorage.getItem("username");
    const response = await fetch(
      "http://localhost/backend/api/savechanges.php",
      {
        method: "POST",
        //  mode:"no-cors",
        body: JSON.stringify({ username: username, profile: profile }),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    navigate("/MainApp");
  }

  function handleClose() {
    navigate("/MainApp");
  }

  return (
    <div className="profilePage bg-gradient-to-b from-slate-900 to-slate-950">
      <h1 className="text-2xl">Profile page </h1>
      <div className="cotaniner">
        <div className="profileContainer flex gap-x-12 p-6">
          <div className="relative">
            <div
              className="imageDiv absolute h-full w-full  top-0 rounded-full hover:bg-opacity-75"
              onMouseEnter={() => setPassive("block")}
              onMouseLeave={() => setPassive("hidden")}
            >
              <HiPencilSquare
                className={`absolute top-[80%] right-[42%] opacity-100 ${passive}`}
                onClick={handleProfileClick}
              />
            </div>
            <img src={`P${profile}.jpg`} className="w-100 h-72 rounded-full" />
          </div>
          <div className="flex flex-col text-start">
            <p className="profileHeadings">Username :</p>
            <p className="profileContent">
              {" "}
              {localStorage.getItem("username")}
            </p>
            <p className="profileHeadings">First Name :</p>
            <p className="profileContent"> {localStorage.getItem("fname")}</p>
            <p className="profileHeadings">Last Name :</p>
            <p className="profileContent"> {localStorage.getItem("lname")}</p>
            <p className="profileHeadings">Email :</p>
            <p className="profileContent"> {localStorage.getItem("email")}</p>
          </div>
        </div>
        <div className="imgOptionContainer flex gap-5 justify-start pl-10 pt-5 ">
          <img
            src="P0.jpg"
            onClick={() => setProfile(0)}
            className={`imgOption h-48 w-fit rounded-full border-black border-2 ${profilePics} `}
          ></img>
          <img
            src="P1.jpg"
            onClick={() => setProfile(1)}
            className={`imgOption h-48 w-fit rounded-full border-black border-2 ${profilePics} `}
          ></img>
          <img
            src="P2.jpg"
            onClick={() => setProfile(2)}
            className={`imgOption h-48 w-fit rounded-full border-black border-2 ${profilePics} `}
          ></img>
          <img
            src="P3.jpg"
            onClick={() => setProfile(3)}
            className={`imgOption h-48 w-fit rounded-full border-black border-2 ${profilePics} `}
          ></img>
        </div>
      </div>
      <button
        className="border-2 border-slate-500 p-4 bg-green-700 "
        onClick={handleSaveClick}
      >
        SAVE CHANGES
      </button>
      <button
        className="border-2 border-slate-500 p-4 bg-red-700 m-12"
        onClick={handleClose}
      >
        CLOSE
      </button>
    </div>
  );
};

export default ProfilePage;
