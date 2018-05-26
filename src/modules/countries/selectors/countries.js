import React from 'react';
import axios from 'axios';

export const getCountriesNames = () => {
  const URL = "https://restcountries.eu/rest/v2/all"

  axios.get(URL)
    .then(res => {
      const arr = res.data;
      arr.map(countries => {
        return (
          console.log(countries.name)
        )
      });
    })
  }
