import React from 'react';
import { Select } from 'antd';
import 'antd/lib/select/style/css.js';
import { getCountriesNames } from './selectors/countries';

import './Countries.scss';

const Option = Select.Option;

function handleChange(value) {
  console.log(`selected ${value}`);
}

const Countries = () => (
  <Select defaultValue="lucy" style={{ width: 120 }} onChange={handleChange}>
    <Option value="jack"></Option>
    <Option value="lucy">Lucy</Option>
    <Option value="disabled" disabled>Disabled</Option>
    <Option value="Yiminghe">yiminghe</Option>
    {getCountriesNames()}
  </Select>
)

export default Countries;
