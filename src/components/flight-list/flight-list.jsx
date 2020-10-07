import React from 'react';
import getFlights from '../../assets/flights';
import Flight from '../flight/flight';

import './flight-list.css';

const FlightList = () => {
  const [flights, setFlights] = React.useState([]);

  React.useEffect(() => {
    const list = getFlights();
    setFlights(list);

  }, []);

  return (
    <div className="list-container">
      {flights.length && flights.map(flight => {
        return <Flight key={flight.uuid} details={flight} />})
      }  
    </div>
   
  );
};

export default FlightList;