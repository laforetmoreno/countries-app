import React, { Component } from 'react';
import './Countries.scss';

class Countries extends Component {

  constructor(props) {
    super(props);
    this.state = {
      names: [],
      infos: {}
    }
  }

  componentDidMount() {
    const url = 'https://restcountries.eu/rest/v2/all';

    fetch(url)
    .then(results => {
      return results.json();
    })
    .then(data => {
      const name = data.map(countries => {
        return (
          <option key={countries.name} value={countries.name}>{countries.name}</option>
        )
      })
      this.setState({
        names: name
      })
    })
  }

  onChangeValue = e => {
    const name = e.target.value;
    // console.log(name)
    
    const urlCountriesInfo = `https://restcountries.eu/rest/v2/name/${name}`;

    fetch(urlCountriesInfo)
    .then(results => {
      console.log(results.json())
      return results.json();
    })
    
  }
  
  render () {
    return (
      <div>
      <select onChange={this.onChangeValue}>{this.state.names}</select>
      </div>
    )
  }
}

export default Countries;
