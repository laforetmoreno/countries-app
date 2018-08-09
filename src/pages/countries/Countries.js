import React, { Component, Fragment } from 'react';
import axios from 'axios';
import { Select } from 'antd';
import 'antd/lib/button/style/index.css'
import 'antd/lib/select/style/index.css'
import 'antd/lib/icon/style/css.js'
import PageHeader from '../../components/header/PageHeader';
import Footer from '../../components/footer/Footer';

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

    this.getCountriesNames();
  }
  
  getCountriesNames = () => {
    axios.get(urlCountrieName)
    .then(resp => this.setState({countriesName: resp.data}))
  }

  renderCountriesNames = () => {
    const { countriesName } = this.state;
    if(countriesName) {
      return (
        countriesName.map(countrie => <Option value={countrie.name} key={countrie.name}>{countrie.name}</Option>)
      )
    }
  }

  getCountriesData = value => {
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
      <PageHeader />
        <div className='Countries__content'>
          <Select 
          onChange={this.getCountriesData}
          defaultValue="Choose a country" 
          style={{ width: 300 }}
          >
            {this.renderCountriesNames()}
          </Select>
          <div className="Countries__content__infos">{this.renderCountriesData()}</div>
          <div className="Countries__content__flag">{this.renderCountriesFlag()}</div>
        </div>
        <Footer />
      </div>
    )
  }
}

export default Countries;
