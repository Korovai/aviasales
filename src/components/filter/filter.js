import React from 'react';

import './filter.css';

const listCheckBoxs = [
  {name: 'without', label: 'Без пересадок', attribute: 'defaultCheck1'},
  {name: 'one', label: '1 пересадка', attribute: 'defaultCheck2'},
  {name: 'two', label: '2 пересадки', attribute: 'defaultCheck3'},
  {name: 'three', label: '3 пересадки', attribute: 'defaultCheck4'}
];

const Filter = ({onFilterTickes}) => {
  const checkboxs = listCheckBoxs.map((item) => {
    const {name, label, attribute} = item;
    
    return(
      <li key={name} id={name} className="form-check checkbox">
        <input onChange={onFilterTickes} id={attribute} className="form-check-input" type="checkbox" value={name} />
        <label className="form-check-label" htmlFor={attribute}>
          {label}
        </label>
      </li>
    );
  });
  
  return (
    <div className="wrFilter">
      <span className="titleFilter">Количество пересадок</span>
      <ul className="filter">
        {checkboxs}
      </ul>
    </div>
  );
};

export default Filter;