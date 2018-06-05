// import React from 'react';

export const getCountriesInfo = () => {
  const urlCountriesInfo = `https://restcountries.eu/rest/v2/name/${name}`;

  fetch(urlCountriesInfo)
  .then(results => {
    console.log(results.json())
    return results.json();
  })
}
