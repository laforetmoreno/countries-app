import React from 'react';
import PropTypes from 'prop-types';

import './CountrieData.scss';

const renderCountriesData = data => data.map(countrie =>
  <ul className="CountrieData__list" key={countrie.name}>
    <li className="CountrieData__list__item" key={countrie.name}>Name: {countrie.name}</li>
    <li className="CountrieData__list__item" key={countrie.area}>Area: {countrie.area}</li>
    <li className="CountrieData__list__item" key={countrie.callingCodes}>Calling Codes: {countrie.callingCodes}</li>
    <li className="CountrieData__list__item" key={countrie.capital}>Capital: {countrie.capital}</li>
    <li className="CountrieData__list__item" key={countrie.region}>Region: {countrie.region}</li>
    <li className="CountrieData__list__item" key={countrie.demonym}>Demonym: {countrie.demonym}</li>
  </ul>
);

const CountrieData = ({ data }) => (
  <div className="CountrieData">{renderCountriesData(data)}</div>
);

CountrieData.Proptypes = {
  data: PropTypes.array,
}

export default CountrieData;
