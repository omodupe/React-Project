import React, { Component } from 'react';
import './App.css';
import Flat from './components/flat';

class App extends Component {
  render() {

    return (
      <div className="App">
        <div>
          <Flat />
        </div>
      </div>
    )
  }
}

export default App;