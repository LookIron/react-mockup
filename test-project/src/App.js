import React, { Component } from 'react';
import './App.css';
import Menu from './components/menu/Menu';
import Filter from './components/filters';
import Trips from './components/trip-items/Trip-Items'

class App extends Component {
  render() {
    return (
      <div id="App">
        <div className="container">
          <div className="container-left">
            <Filter/>
              
          </div>
          <div className="container-right">
            <Menu />
            <Trips />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
