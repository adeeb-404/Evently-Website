import React, { useEffect, useState } from "react";
import "../CSS-components/Popup.css";

export default function Popup(props) {
  console.log(props);
  const [IsAttend, setIsAttend] = useState(false);

  function closePopup() {
    props.setTriggered(false);
    setIsAttend(false);
  }

  return (
    <>
      <div className="popupBody bg-opacity-85 bg-slate-950">
        {/* <EventBox key={index} id={index} festName={item.festName} place={item.place} time={item.time} discription={item.discription} onTap={showBox}/> */}
        <div className="popupContent bg-slate-800 border-2 p-4 h-[80%]">
          <div className="bck-btn w-11 h-8" onClick={closePopup}>
            X
          </div>
          <h2>Event Infomration : </h2>
          <div className="contentContainer">
            <div className="ContentName">
              <ul>
                <li>Event name </li>
                <li>Place </li>
                <li>Time </li>
                <li>Date </li>
                <li>Duration </li>
                <li>Age group </li>
                <li>Category </li>
                <li>Dress code </li>
                <li>Contact no </li>
              </ul>
            </div>
            <div className="ContentInfo">
              <ul>
                <li>{props.fName}</li>
                <li>{props.place}</li>
                <li>{props.time}</li>
                <li>{props.date}</li>
                <li>{props.duration}</li>
                <li>{props.ageGroup}</li>
                <li>{props.category}</li>
                <li>{props.dressCode}</li>
                <li>{props.contactNo}</li>
              </ul>
            </div>
          </div>
          <div className="discription">
            <p className="eventDisc">Discription : </p>
            <p className="ContentInfo">{props.discription}</p>
          </div>
          <button className=" border-2 w-36 h-10 m-4 hover:bg-gradient-to-tr hover:from-orange-400 hover:to-red-600 hover:transition-all">
            Attend Event
          </button>
        </div>
      </div>
    </>
  );
}
