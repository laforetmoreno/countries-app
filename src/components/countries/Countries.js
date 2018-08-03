import React, { Component } from 'react';
import axios from 'axios';
import { Select } from 'antd';
import 'antd/lib/button/style/index.css'
import 'antd/lib/select/style/index.css'
import 'antd/lib/icon/style/css.js'

import './Countries.scss';

// const urlCountrieName = `https://restcountries.eu/rest/v2/name/${name}`;
const urlBase = 'https://restcountries.eu/rest/v2/all';

const Option = Select.Option;

class Countries extends Component {

  constructor(props) {
    super(props);
    this.state = {
      countries: [],
    }

    this.handleSearch();
  }
  
  handleSearch = () => {
    axios.get(urlBase)
    .then(resp => this.setState({countries: resp.data}))
  }

  renderNames = () => {
    const { countries } = this.state;
    if(countries) {
      return (
        countries.map(countrie => <Option key={countrie.name}>{countrie.name}</Option>)
      )
    }
  }
  
  render () {
    return (
      <div className='Countries__content'>
          <Select 
          defaultValue="Choose a country" 
          style={{ width: 300 }}
          >
            {this.renderNames()}
          </Select>
      </div>
    )
  }
}

export default Countries;
