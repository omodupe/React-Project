import React, { Component } from 'react';
import './App.css';
import Flat from './components/flat';

class App extends Component {
  render() {
    const flat= {
      "name": "Superbe vue à 2 min du Sacré Coeur",
      "imageUrl": "https://raw.githubusercontent.com/lewagon/flats-boilerplate/master/images/flat5.jpg",
      "price": 135,
      "priceCurrency": "EUR"
    };

    return (
      <div className="App">
        <div className="main">
          <div className="search"></div>
          <div className="flats">
          <Flat flat={flat} />
          <Flat flat={flat} />
          <Flat flat={flat} />
          </div>
        </div>
        <div className="map"></div>
      </div>
    )
  }
}

export default App;