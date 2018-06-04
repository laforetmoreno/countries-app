import React, { Component } from 'react';
// import { Select } from 'antd';
import 'antd/lib/select/style/css.js';
import { getCountriesNames } from './selectors/countries';

import './Countries.scss';

class Countries extends Component {

  constructor(props) {
    super(props);
    this.state = {
      names: [],
    }
  }

  componentDidMount() {
    fetch('https://restcountries.eu/rest/v2/all')
    .then(results => {
      return results.json();
    })
    .then(data => {
      const map = data.map(x => {
        return (
          <option>{x.name}</option>
        )
      })
      this.setState({
        names: map
      })
    })
  }

  render () {
    return (
      <select>{this.state.names}</select>
    )
  }
}

export default Countries;
