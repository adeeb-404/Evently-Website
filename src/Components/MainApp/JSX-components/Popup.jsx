import React, { useEffect, useState } from "react";
import "../CSS-components/Popup.css";

export default function Popup(props) {
  console.log(props);
  const [IsAttend, setIsAttend] = useState(false);

  function closePopup() {
    props.setTriggered(false);
    setIsAttend(false);
  }

  async function handle_Adttend_event() {
    const data = {
      name: props.fName,
      place: props.place,
      // time: props.time,
      // date: props.date,
      // duration: props.duration,
      // age_group: props.ageGroup,
      // category: props.category,
      // dress_code: props.dressCode,
      // contact_no: props.contactNo,
      username: localStorage.getItem("username"),
    };
    props.setTriggered(false);
    console.log(data);
    await fetch("http://localhost/backend/api/attendance.php", {
      method: "post",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data1 = {
      name: props.fName,
      place: props.place,
      time: props.time,
      date: props.date,
      duration: props.duration,
      age_group: props.ageGroup,
      category: props.category,
      dress_code: props.dressCode,
      fname: localStorage.getItem("fname"),
      email: localStorage.getItem("email"),
    };
    await fetch("http://localhost/backend/api/sendmail.php", {
      method: "post",
      body: JSON.stringify(data1),
      headers: {
        "Content-Type": "application/json",
      },
    });
    alert("Thank you for attending the event,Check your inbox for more....");
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
          <button
            className=" border-2 w-36 h-10 m-4 hover:bg-gradient-to-tr hover:from-orange-400 hover:to-red-600 hover:transition-all"
            onClick={handle_Adttend_event}
          >
            Attend Event
          </button>
        </div>
      </div>
    </>
  );
}
