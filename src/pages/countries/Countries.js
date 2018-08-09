import React, { Component } from 'react';
import { Select } from 'antd';
import 'antd/lib/button/style/index.css';
import 'antd/lib/select/style/index.css';
import 'antd/lib/icon/style/css.js';

import PageHeader from '../../components/header/PageHeader';
import Footer from '../../components/footer/Footer';
import CountrieData from '../../components/countrie-data/CountrieData';
import Flag from '../../components/flag/Flag';
import WelcomeVisitor from '../../components/welcome-visitor/WelcomeVisitor';
import urlsApi from '../../config/urlsApi';
import fetch from '../../utils/fetch';

import './Countries.scss';

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
    fetch(urlsApi.countriesName)
    .then(resp => this.setState({countriesName: resp.data}))
  }

  getCountriesData = value => {
    fetch(urlsApi.countriesData(value))
    .then(resp => this.setState({countriesData: resp.data}))
  }

  renderCountriesNames = () => {
    const { countriesName } = this.state;
    return (
      countriesName.map(countrie => <Option value={countrie.name} key={countrie.name}>{countrie.name}</Option>)
    )
  }

  render () {
    const { countriesData } = this.state;
    return (
      <div className='Countries'>
        <PageHeader text="Countries App" />
        <div className="Countries__select">
        <Select
          onChange={this.getCountriesData}
          defaultValue="Choose a country"
          style={{ width: 300 }}
        >
          {this.renderCountriesNames()}
        </Select>
        </div>
        <div className='Countries__content'>
          {countriesData.length === 0 ? (
            <WelcomeVisitor
              title="Hello visitor, welcome to the Countrie App"
              text="AHere you can see the curiosities of the countries around the world, so enjoy!"
            />
          ) : (
            <div>
              <CountrieData data={countriesData} />
              <Flag data={countriesData} />
            </div>
          )}
        </div>
        <Footer text="by Moreno Laforet" />
      </div>
    )
  }
}

export default Countries;
