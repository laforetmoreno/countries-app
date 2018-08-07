import React, { Component, Fragment } from 'react';
import axios from 'axios';
import { Select } from 'antd';
import 'antd/lib/button/style/index.css'
import 'antd/lib/select/style/index.css'
import 'antd/lib/icon/style/css.js'

import './Countries.scss';

const urlCountrieName = 'https://restcountries.eu/rest/v2/all?fields=name';

const Option = Select.Option;

class Countries extends Component {

  constructor(props) {
    super(props);
    this.state = {
      countriesData: [],
      countriesName: [],
    }

    this.handleSearchData();
  }
  
  handleSearchData = () => {
    axios.get(urlCountrieName)
    .then(resp => this.setState({countriesName: resp.data}))
  }

  renderNames = () => {
    const { countriesName } = this.state;
    if(countriesName) {
      return (
        countriesName.map(countrie => <Option value={countrie.name} key={countrie.name}>{countrie.name}</Option>)
      )
    }
  }

  getCountrieInfo = value => {
    const countrieName = value;
    const urlCountrieData = `https://restcountries.eu/rest/v2/name/${countrieName}`;
    
    axios.get(urlCountrieData)
    .then(resp => this.setState({countriesData: resp.data}))
  }

  renderCountriesData = () => {
    const { countriesData } = this.state;
    if(countriesData) {
      return (
        countriesData.map(countrie => 
          <Fragment key={countrie.name}>
            <h4 className="Countries__infos-item" key={countrie.name}>Name: {countrie.name}</h4>
            <h4 className="Countries__infos-item" key={countrie.area}>Area: {countrie.area}</h4>
            <h4 className="Countries__infos-item" key={countrie.callingCodes}>Calling Codes: {countrie.callingCodes}</h4>
            <h4 className="Countries__infos-item" key={countrie.capital}>Capital: {countrie.capital}</h4>
            <h4 className="Countries__infos-item" key={countrie.region}>Region: {countrie.region}</h4>
            <h4 className="Countries__infos-item" key={countrie.demonym}>Demonym: {countrie.demonym}</h4>
          </Fragment>
        )
      )
    }
  }

  renderCountriesFlag = () => {
    const { countriesData } = this.state;
    if(countriesData) {
      return (
        countriesData.map(countrie => 
          <Fragment key={countrie.flag}>
            <img src={countrie.flag} alt={countrie.flag} />
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
        <div className="Countries__infos">{this.renderCountriesData()}</div>
        <div className="Countries__flag">{this.renderCountriesFlag()}</div>
      </div>
    )
  }
}

export default Countries;
