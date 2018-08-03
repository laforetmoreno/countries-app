import React, { Component, Fragment } from 'react';
import axios from 'axios';
import { Select } from 'antd';
import 'antd/lib/button/style/index.css'
import 'antd/lib/select/style/index.css'
import 'antd/lib/icon/style/css.js'

import './Countries.scss';

const urlBase = 'https://restcountries.eu/rest/v2/all';

const Option = Select.Option;

class Countries extends Component {

  constructor(props) {
    super(props);
    this.state = {
      countries: [],
      countriesInfo: [],
    }

    this.handleSearchData();
  }
  
  handleSearchData = () => {
    axios.get(urlBase)
    .then(resp => this.setState({countries: resp.data}))
  }

  renderNames = () => {
    const { countries } = this.state;
    if(countries) {
      return (
        countries.map(countrie => <Option value={countrie.name} key={countrie.name}>{countrie.name}</Option>)
      )
    }
  }

  getCountrieInfo = value => {
    const countrieName = value;
    const urlCountrieName = `https://restcountries.eu/rest/v2/name/${countrieName}`;
    
    axios.get(urlCountrieName)
    .then(resp => this.setState({countriesInfo: resp.data}))
  }

  renderCountriesInfo = () => {
    const { countriesInfo } = this.state;
    if(countriesInfo) {
      return (
        countriesInfo.map(countrie => 
            <Fragment>
              <h2 className="Countries__infos-item">Name: {countrie.name}</h2>
              <h2 className="Countries__infos-item">Area: {countrie.area}</h2>
            </Fragment>
        )
      )
    }
  }
  
  render () {
    return (
      <div className='Countries'>
        <Select 
        onChange={this.getCountrieInfo}
        defaultValue="Choose a country" 
        style={{ width: 300 }}
        >
          {this.renderNames()}
        </Select>
        <div className="Countries__infos">{this.renderCountriesInfo()}</div>
      </div>
    )
  }
}

export default Countries;
