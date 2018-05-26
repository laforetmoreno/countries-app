import axios from 'axios';

export const getCountriesNames = () => {
  const URL = "https://restcountries.eu/rest/v2/all"

  axios.get(URL)
    .then(res => {
      const names = res.data;
    })
    .then(names => names.map(countries => {
      const name = countries.name
      return name;
    }))
  }
