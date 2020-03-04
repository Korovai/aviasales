import React from 'react';
import Header from '../header/header';
import Filter from '../filter/filter';
import Sorting from '../sorting/sorting';
import Tickets from '../tickets/tickets';

import './app.css';

const App = () => {
  return (
    <React.Fragment>
      <Header />
      <div className="container">
        <div className="row">
          <div className="col-4">
            <Filter />
          </div>
          <div className="col-8">
            <Sorting />
            <Tickets />
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default App;