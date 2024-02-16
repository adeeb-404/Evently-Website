import React from "react";
import OrganizeForm from "./OrganizeForm";
// import OrganizerBody from "./OrgnaizerBody";
import '../CSS-components/EventInfo.css';

export default function (){
    return(
        <div className="EventInfo">
            <h1>Organize Event</h1>
            {/* <OrganizerBody/> */}
            <ul>
                <li>Event title </li>
                <li><p>Date</p> </li>
                <li><p>Time</p> </li>
                <li><p>Location</p> </li>
                <li><p>Dress code</p> </li>
                <li><p>Age group </p></li>
                <li><p>Duration</p></li>
                <li><p>Contact no </p></li>
            </ul>
            
            
        </div>
    )
}