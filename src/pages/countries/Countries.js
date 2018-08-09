import React, { Component } from 'react';
import axios from 'axios';
import { Select } from 'antd';
import 'antd/lib/button/style/index.css'
import 'antd/lib/select/style/index.css'
import 'antd/lib/icon/style/css.js'
import PageHeader from '../../components/header/PageHeader';
import Footer from '../../components/footer/Footer';
import CountrieData from '../../components/countrie-data/CountrieData';
import Flag from '../../components/flag/Flag';
import urls from '../../config/urlsApi';

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
    axios.get(urls.countriesName)
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
    axios.get(urls.countriesData(value))
    .then(resp => this.setState({countriesData: resp.data}))
  }

  render () {
    const { countriesData } = this.state
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
          <CountrieData data={countriesData} />
          <Flag data={countriesData} />
        </div>
        <Footer />
      </div>
    )
  }
}

export default Countries;
