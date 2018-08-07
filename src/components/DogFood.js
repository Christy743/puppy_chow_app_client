import React, { Component } from 'react';
import DogForm from './DogForm';
import Dogs from './Dogs';

export default class DogFood extends Component {
  constructor(props) {
    super(props);

    this.state = {
      dogs: [],
    }
  }

addDog = (dog) => {
  this.setState({
    dogs: [this.state.dogs, dog],
  })
}

  render() {
    return (
      <div>
        <h1>Puppy Chow App</h1>
        <DogForm onSubmit={this.addDog.bind(this)}/>
        <Dogs dogs={this.state.dogs} />
      </div>
    );
  }
}
