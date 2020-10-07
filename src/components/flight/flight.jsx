import React from "react";
import Segment from "../segment/segment";

import './flight.css';

const Flight = props => {
  return (
    <div className="flight-card">
      <img className="flight-logo"
        src={props.details.flight.flightSegments[0].highResAirlineLogoUrl}
        alt="logo"
      />
      <Segment name={props.details.flight.flightSegments[0].airlineName} departure={props.details.flight.flightSegments[0]} arrival={props.details.flight.flightSegments[props.details.flight.flightSegments.length-1]}/>
      <div className="duration">
        <div>Duration</div>
        <div>{props.details.flight.durationMinutes}</div>
      </div>
      <div className="price">
        <div>&#36; {props.details.priceInfo.totalPrice}</div>
        <button>View</button>
      </div>
    </div>
  );
};

export default Flight;
