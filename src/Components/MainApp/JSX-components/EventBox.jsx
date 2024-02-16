import React from "react";
import "../CSS-components/EventBox.css";

export default function EventBox(props) {
  var id;
  function handleClick() {
    // console.log(props.id);
    props.onTap(props.id);
    props.setTriggered(true);
  }

  function closePopup() {
    props.setTriggered(false);
  }
  return (
    <div
      className="EventBox border-slate-950 border-2 shadow-slate-950 shadow-md hover:shadow-xl hover:shadow-slate-950 bg-slate-800 text-slate-200 hover:bg-slate-900 hover:text-slate-100"
      onClick={handleClick}
    >
      <div className="BoxHeading">
        {/* {id = props.id} */}
        <h1>{props.festName}</h1>
        <div>
          <h2>{props.place}</h2>
          <h2> | </h2>
          <h2>{props.time}</h2>
        </div>
      </div>
      <div className="BoxContent">
        <p>{props.discription}</p>
      </div>
    </div>
  );
}
