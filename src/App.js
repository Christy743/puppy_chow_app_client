import React, { Component } from 'react';
import DogFoods from './components/DogFoods';
import DogFoodService from './services/DogFoodService';
import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      dogFoods: []
    };
  };

  componentDidMount() {
    DogFoodService.fetchDogFoods().then(dogFoods => this.setState({ dogFoods }))
  }

  render() {
    console.log(this.state.dogFoods)
    return (
      <div className="App">
        <div className="navbar">
          {/* <Navbar /> */}
        </div>
        <div className="sidebar">
          <DogFoods dogFoods={this.state.dogFoods} />
        </div>
        <div className="main-content">
          {/* <Dog /> */}
        </div>
      </div>
    );
  }
}

export default App;
