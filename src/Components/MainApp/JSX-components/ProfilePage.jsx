import React, { useState } from "react";
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
  function handleProfileClick() {
    setProfilePics((prev) => (prev == "hidden" ? "block" : "hidden"));
  }

  function handleSaveClick() {
    localStorage.setItem("pp", profile);
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
            <p className="profileHeadings">Username :</p>{" "}
            <p className="profileContent"> Manoj</p>
            <p className="profileHeadings">First Name :</p>{" "}
            <p className="profileContent"> Manoj </p>
            <p className="profileHeadings">Last Name :</p>{" "}
            <p className="profileContent"> Hebbar</p>
            <p className="profileHeadings">Email :</p>{" "}
            <p className="profileContent"> manojhebbar@gmail.com </p>
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
    </div>
  );
};

export default ProfilePage;
