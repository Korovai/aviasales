import React from 'react';

import './error-indicator.css';
import iconError from './error.png';

const ErrorIndicator = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-12">
    
          <div className="errorIndicator">
            <img src={iconError} alt="Icon Error" />
            <span className="boom">Boom!</span>
            <span>something has gone terribli wrong</span>
            <span>(but we are already fixing it)</span>
          </div>
  
        </div>
      </div>
    </div>  
  );
};

export default ErrorIndicator;