import React, { Component } from 'react';
import { Select } from 'antd';
import 'antd/lib/select/style/css.js';
import { getCountriesNames } from './selectors/countries';
import axios from 'axios'

import './Countries.scss';

class Countries extends Component {

  state = {
    name: `ola`,
  }

   getCountriesNames = () => {
    const URL = "https://restcountries.eu/rest/v2/all"
  
    axios.get(URL)
      .then(res => {
        const arr = res.data;
        arr.map(countries => this.setState({name: countries.name}));
      })
    }

      showName = () => {
      return (
        <li>{this.state.name}</li>
      )
    }
  
  
  render () {
    console.log(this.state.name)
    return (
      <div>
        <ul>
          {this.showName()}
        </ul>
      </div>
    );
  }
}


export default Countries;
