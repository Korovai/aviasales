import React from 'react';

import './tickets.css';
import logoAirline from './logoAirline.png';

const Tickets = () => {
  return (
    <div className="wrTickets">
      <ul className="list-group ticketsList">
        <li className="list-group-item">
          <div className="ticket">
            <div className="ticketRow1">
              <div className="price">13400 P</div>
              <img src={logoAirline} className="logoAirLine" alt="Logo" />
            </div>
            <div className="ticketRow2">
              <div className="flight">
                <div className="flightCol">
                  <div className="labelFlight">MOW - HKT</div>
                  <div className="infoFlight">10:45 - 08:00</div>
                </div>
                <div className="flightCol">
                  <div className="labelFlight">В пути</div>
                  <div className="infoFlight">21ч15м</div>
                </div>
                <div className="flightCol">
                  <div className="labelFlight">2 пересадки</div>
                  <div className="infoFlight">HKG, JNB</div>
                </div>
              </div>
              
              <div className="flight">
                <div className="flightCol">
                  <div className="labelFlight">MOW - HKT</div>
                  <div className="infoFlight">11:20 - 00:50</div>
                </div>
                <div className="flightCol">
                  <div className="labelFlight">В пути</div>
                  <div className="infoFlight">13ч30м</div>
                </div>
                <div className="flightCol">
                  <div className="labelFlight">1 пересадка</div>
                  <div className="infoFlight">HKG</div>
                </div>
              </div>
            </div>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default Tickets;