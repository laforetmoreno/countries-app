import React, { Component } from 'react';
// import { Select } from 'antd';
import 'antd/lib/select/style/css.js';
import { getCountriesNames } from './selectors/countries';

import './Countries.scss';

class Countries extends Component {
  render () {
    return (
      <p>{getCountriesNames()}</p>
    )
  }
}

export default Countries;
