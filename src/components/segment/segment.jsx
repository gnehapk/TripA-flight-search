import React from "react";

import './segment.css';

const Segment = props => {
  
  return (
    <div className="segment-section">
     <div>{props.name}</div>
     <div className="segment-container">
      <div>{props.departure.departureDateAndTime}</div>
      <div>{props.departure.departureAirportCode}</div>
      <div className="line"></div>
      <div>{props.arrival.arrivalDateAndTime}</div>
      <div>{props.arrival.arrivalAirportCode}</div>
     </div>
    </div>
  );
};

export default Segment;
