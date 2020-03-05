import React from 'react';

import './sorting.css';

const Sorting = ({onSortingTickets}) => {
  return (
    <div className="wrSorting">
      <button onClick={() => onSortingTickets('cheap')} className="btnCheap" type="submit">Самый дешевый</button>
      <button onClick={() => onSortingTickets('fast')} className="btnFast" type="submit">Самый Быстрый</button>
    </div>
  );
};

export default Sorting;