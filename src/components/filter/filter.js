import React from 'react';

import './filter.css';

const Filter = () => {
  return (
    <div className="wrFilter">
      <span className="titleFilter">Количество пересадок</span>
      <ul className="filter">
        <li className="form-check">
          <input className="form-check-input" type="checkbox" value="" id="defaultCheck1" />
          <label className="form-check-label" htmlFor="defaultCheck1">
            Все
          </label>
        </li>
        <li className="form-check">
          <input className="form-check-input" type="checkbox" value="" id="defaultCheck2" />
          <label className="form-check-label" htmlFor="defaultCheck2">
            Без пересадок
          </label>
        </li>
        <li className="form-check">
          <input className="form-check-input" type="checkbox" value="" id="defaultCheck3" />
          <label className="form-check-label" htmlFor="defaultCheck3">
            1 пересадка
          </label>
        </li>
        <li className="form-check">
          <input className="form-check-input" type="checkbox" value="" id="defaultCheck4" />
          <label className="form-check-label" htmlFor="defaultCheck4">
            2 пересадки
          </label>
        </li>
        <li className="form-check">
          <input className="form-check-input" type="checkbox" value="" id="defaultCheck5" />
          <label className="form-check-label" htmlFor="defaultCheck5">
            3 пересадки
          </label>
        </li>
      </ul>
    </div>
  );
};

export default Filter;