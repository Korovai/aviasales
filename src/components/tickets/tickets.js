import React, {Component} from 'react';
import AviaService from '../../services/avia-service';
import Spinner from '../spinner/spinner';

import './tickets.css';
import logoAirline from './logoAirline.png';

export default class Tickets extends Component {
  
  state = {
    tickets: {},
    loading: true
  };
  
  aviaService = new AviaService();
  
  componentDidMount() {
    this.loadingTickets(); 
  };
      
  loadingTickets = () => {
    this.aviaService
      .getTickets().then((tickets) => {
      this.setState({
        tickets,
        loading: false
      });
    });
  };

  render() {
    const {tickets, loading} = this.state;
    
    if(loading) {
      return <Spinner />
    }
      
    const elementsList = tickets.map((item) => {
      const {price, originFrom, destinationFrom, dateFrom, dateArrivalFrom, stopsFrom, stopsFromCount, durationFrom, originTo, destinationTo, dateTo, dateArrivalTo, stopsTo, stopsToCount, durationTo} = item;
      
      return (
        <li className="list-group-item">
          <div className="ticket">
            <div className="ticketRow1">
              <div className="price">{price} P</div>
              <img src={logoAirline} className="logoAirLine" alt="Logo" />
            </div>
            <div className="ticketRow2">
              <div className="flight">
                <div className="flightCol">
                  <div className="labelFlight">{originFrom} - {destinationFrom}</div>
                  <div className="infoFlight">{dateFrom} - {dateArrivalFrom}</div>
                </div>
                <div className="flightCol">
                  <div className="labelFlight">В пути</div>
                  <div className="infoFlight">{durationFrom}</div>
                </div>
                <div className="flightCol">
                  <div className="labelFlight">{stopsFromCount}</div>
                  <div className="infoFlight">{stopsFrom}</div>
                </div>
              </div>

              <div className="flight">
                <div className="flightCol">
                  <div className="labelFlight">{originTo} - {destinationTo}</div>
                  <div className="infoFlight">{dateTo} - {dateArrivalTo}</div>
                </div>
                <div className="flightCol">
                  <div className="labelFlight">В пути</div>
                  <div className="infoFlight">{durationTo}</div>
                </div>
                <div className="flightCol">
                  <div className="labelFlight">{stopsToCount}</div>
                  <div className="infoFlight">{stopsTo}</div>
                </div>
              </div>
            </div>
          </div>
        </li>
      );
    }); 
    
    return (
      <div className="wrTickets">
        <ul className="list-group ticketsList">
          {elementsList}
        </ul>
      </div>
    );
  };
}