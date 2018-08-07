import React, { Component } from 'react';
import DogFood from './components/DogFood';
import DogFoodService from './services/DogFoodService';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <DogFood />
      </div>
    );
  }
}

export default App;
