import React, { Component } from 'react';
import DogForm from './DogForm';
import Dogs from './Dogs';
import uuidV4 from 'uuid/v4';

export default class DogFood extends Component {
  constructor(props) {
    super(props);

    this.state = {
      dogs: [],
    }
  }

  componentWillMount = () => {
    this.setState({
      dogs: [
        ...this.state.dogs,
        {id: uuidV4(), name: "Fido", weight: "3", bagWeight: "32"},
        {id: uuidV4(), name: "Max", weight: "4", bagWeight: "52"}
      ]
    });
  }

  addDog = (dog) => {
    this.setState({
      dogs: [...this.state.dogs, {id: uuidV4(), ...dog}],
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
