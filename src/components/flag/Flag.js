import React from 'react';
import PropTypes from 'prop-types';

import './Flag.scss';

const renderCountriesFlag = data => data.map(countrie => <img className="Flag__item" key={countrie.flag} src={countrie.flag} alt={countrie.flag} />);

const Flag = ({ data }) => (
  <div className="Flag">{renderCountriesFlag(data)}</div>
)

Flag.Proptypes = {
  data: PropTypes.array,
}

export default Flag;
