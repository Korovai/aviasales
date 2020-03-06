import React, {Component} from 'react';
import Header from '../header/header';
import Filter from '../filter/filter';
import Sorting from '../sorting/sorting';
import Tickets from '../tickets/tickets';
import AviaService from '../../services/avia-service';
import ErrorIndicator from '../error-indicator/error-indicator';

import './app.css';

export default class App extends Component {
  
  state = {
    tickets: {},
    loading: true,
    error: false,
    filter: [],
    term: 'cheap',
    filteredTickets: []
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
    }).catch(this.onError);
  };
  
  onError = (e) => {
    this.setState({loading: false, error: true});
  };
  
  onFilterTickes = (e) => {
    const {checked, value} = e.target;
    
    switch(value) {
      case 'without':
        if(checked) {
          this.setState((state) => {
            return {
              filteredTickets: [...(this.state.tickets.filter((item) => item.stopsFromCount === '0')), ...state.filteredTickets]
            }
          });
        } else {
          this.setState((state) => {
            return {
              filteredTickets: this.state.filteredTickets.filter((item) => item.stopsFromCount !== '0')
            }
          });
        }
        break;
      case 'one':
        if(checked) {
          this.setState((state) => {
            return {
              filteredTickets: [...(this.state.tickets.filter((item) => item.stopsFromCount === '1')), ...state.filteredTickets]
            }
          });
        } else {
          this.setState((state) => {
            return {
              filteredTickets: this.state.filteredTickets.filter((item) => item.stopsFromCount !== '1')
            }
          });
        }
        break;
      case 'two':
        if(checked) {
          this.setState((state) => {
            return {
              filteredTickets: [...(this.state.tickets.filter((item) => item.stopsFromCount === '2')), ...state.filteredTickets]
            }
          });
        } else {
          this.setState((state) => {
            return {
              filteredTickets: this.state.filteredTickets.filter((item) => item.stopsFromCount !== '2')
            }
          });
        }
        break;
      case 'three':
        if(checked) {
          this.setState((state) => {
            return {
              filteredTickets: [...(this.state.tickets.filter((item) => item.stopsFromCount === '3')), ...state.filteredTickets]
            }
          });
        } else {
          this.setState((state) => {
            return {
              filteredTickets: this.state.filteredTickets.filter((item) => item.stopsFromCount !== '3')
            }
          });
        }
        break;
      default:
        console.log('Filtering error!');
    };
    
    this.setState({
      filter: {...this.state.filter, [value]: checked}
    });
  };
  
  onSortingTickets = (term) => {
    this.setState({term})
  }

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
        console.log('Sorting error!');
    };
  };
  
  render() {   
    const {tickets, loading, error, term, filteredTickets} = this.state;
    const visibleTickets = this.sortingTickets((filteredTickets.length === 0 ? tickets : filteredTickets), term);
    
    const bodyApp = (
      <React.Fragment>
        <Header />
        <div className="container">
          <div className="row">
            <div className="col-4">
              <Filter onFilterTickes={this.onFilterTickes} />
            </div>
            <div className="col-8">
              <Sorting term={term} onSortingTickets={this.onSortingTickets} />
              <Tickets tickets={visibleTickets} loading={loading} />
            </div>
          </div>
        </div>
      </React.Fragment>
    );
    const content = error ? <ErrorIndicator /> : bodyApp;
  
    return (
      <React.Fragment>
        {content}
      </React.Fragment>
    );
  };
}