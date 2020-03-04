import React from 'react';

import './sorting.css';

const Sorting = () => {
  return (
    <div className="wrSorting">
      <button className="btnCheap" type="submit">Самый дешевый</button>
      <button className="btnFast" type="submit">Самый Быстрый</button>
    </div>
  );
};

export default Sorting;