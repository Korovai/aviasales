import React from 'react';

import './sorting.css';

const sortingButtons = [
  {name: 'cheap', label: 'Самый дешевый'},
  {name: 'fast', label: 'Самый быстрый'}
];

const Sorting = ({term, onSortingTickets}) => {
  const buttons = sortingButtons.map((item) => {
    const {name, label} = item;
    const isActive = name === term;
    const classNames = isActive ? 'activeBtn' : 'sortingBtn';
    
    return(
      <button key={name} onClick={() => onSortingTickets(name)} className={classNames} type="submit">{label}</button>
    );
  });
  
  return (
    <div className="wrSorting">
      {buttons}
    </div>
  );
};

export default Sorting;