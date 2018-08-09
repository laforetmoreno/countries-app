const urls = {
  countriesName: 'https://restcountries.eu/rest/v2/all?fields=name',
  countriesData:  countrieName => `https://restcountries.eu/rest/v2/name/${countrieName}`
}

export default urls;
