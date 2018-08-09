import React, { Component } from 'react';
import Countries from './pages/countries/Countries';
import './App.scss';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Countries />
      </div>
    );
  }
}

export default App;
