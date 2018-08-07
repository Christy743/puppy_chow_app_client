import React, { Component } from 'react';
import DogForm from './DogForm';

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
      </div>
    );
  }
}
