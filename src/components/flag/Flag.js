import React from 'react';

import './Flag.scss';

const renderCountriesFlag = data => {
  return (
    data.map(countrie =>
      <img className="Flag__item" key={countrie.flag} src={countrie.flag} alt={countrie.flag} />
    )
  )
}

const Flag = ({ data }) => (
  <div className="Flag">{renderCountriesFlag(data)}</div>
)

export default Flag;
