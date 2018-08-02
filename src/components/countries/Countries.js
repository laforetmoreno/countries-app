import React, { Component } from 'react';
import axios from 'axios';
import { Button, Select } from 'antd';
import 'antd/lib/button/style/index.css'
import 'antd/lib/select/style/index.css'
import 'antd/lib/icon/style/css.js'

import './Countries.scss';
import { options } from 'sw-toolbox';

// const urlCountrieName = `https://restcountries.eu/rest/v2/name/${name}`;
const urlBase = 'https://restcountries.eu/rest/v2/all';

const Option = Select.Option;

const renderOptions = () => {
  const { countriesNames } = this.state;
}


class Countries extends Component {

  state = {
    countriesNames: [],
  }

  componentWillMount() {
    this.handleSearch();
  }
  
  handleSearch = () => {
    axios.get(urlBase)
    .then(resp => this.setState({countriesNames: resp.data}))
  }
  
  render () {
    const { countriesNames, names } = this.state;
    return (
      <div className='Countries__content'>
      <select>
        {this.getCountriesNames()}
      </select>
      <Button 
        type="primary" 
        icon="search" 
        onClick={this.getCountriesNames}
        >
        Search
        </Button>
        {this.getCountriesNames()}
      </div>
    )
  }
}

export default Countries;
