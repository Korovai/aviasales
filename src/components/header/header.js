import React from 'react';

import './header.css';
import logo from './logo.png';

const Header = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-12">
          
          <div className="header">
            <div className="logo">
              <img src={logo} alt="Logo" /> 
            </div>
          </div>
        
        </div>
      </div>
    </div>
  );
};

export default Header;