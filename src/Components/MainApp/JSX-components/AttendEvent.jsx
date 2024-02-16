import React from "react";

export default function AttendEvent() {
  return (
    <div>
      <div className="AttendEventDiv">
        <h2>Do you want to attend the event</h2>
        <input type="radio" value="yes" id="yes"></input>
        <input type="radio" value="no" id="no"></input>
      </div>
      {console.log("Hello world")}
    </div>
  );
}
