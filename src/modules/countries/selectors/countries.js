import axios from 'axios';

export const getCountriesNames = () => {
  const URL = "https://restcountries.eu/rest/v2/all"

  axios.get(URL)
    .then(res => {
      const data = res.data;
      console.log(data);
    })
  }
