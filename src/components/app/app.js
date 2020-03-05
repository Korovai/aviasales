import React, {Component} from 'react';
import Header from '../header/header';
import Filter from '../filter/filter';
import Sorting from '../sorting/sorting';
import Tickets from '../tickets/tickets';
import AviaService from '../../services/avia-service';

import './app.css';

export default class App extends Component {
  
  state = {
    tickets: {},
    loading: true,
    filter: '',
    term: 'cheap'
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
  
  onFilterChange = (filter) => {
    this.setState({filter});
  };
  
  onSortingTickets = (term) => {
    this.setState({term})
  }
  
  filterTickets(items, parametr) {
    switch(parametr) {
      case 'without':
        return items.filter((item) => item.stopsFromCount === '0');
      case 'one':
        return items.filter((item) => item.stopsFromCount === '1');
      case 'two':
        return items.filter((item) => item.stopsFromCount === '2');
      case 'three':
        return items.filter((item) => item.stopsFromCount === '3');
      default:
        return items;
    };
  };
  
  sortingTickets(items, term) {
    switch(term) {
      case 'cheap':
        return [].slice.call(items).sort((a, b) => {
          return a.price - b.price;
        });
      case 'fast':
        return [].slice.call(items).sort((a, b) => {
          return (((a.durationFrom.split('ч')[0])*60) + Number(a.durationFrom.substring(a.durationFrom.search(' '), (a.durationFrom.length) - 1))) - (((b.durationFrom.split('ч')[0])*60) + Number(b.durationFrom.substring(b.durationFrom.search(' '), (b.durationFrom.length) - 1)));
        });
      default:
        return items;
    };
  };
  
  render() {
    const {tickets, loading, filter, term} = this.state;
    const visibleTickets = this.filterTickets(this.sortingTickets(tickets, term), filter);
    
    return (
      <React.Fragment>
        <Header />
        <div className="container">
          <div className="row">
            <div className="col-4">
              <Filter onFilterChange={this.onFilterChange} />
            </div>
            <div className="col-8">
              <Sorting term={term} onSortingTickets={this.onSortingTickets} />
              <Tickets tickets={visibleTickets} loading={loading} />
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  };
}