import React, { Component } from 'react';
import DogForm from './DogForm';
import Dogs from './Dogs';
import uuidV4 from 'uuid/v4';
//import { Route, Switch } from 'react-router-dom';

export default class DogFood extends Component {
  constructor(props) {
    super(props);

    this.state = {
      dogs: [],
      editing: null,
    }
  }

  componentWillMount = () => {
    this.setState({
      dogs: [
        ...this.state.dogs,
        {id: uuidV4(), name: "Max", weight: "toy", bagWeight: "15"},
        {id: uuidV4(), name: "Sassy", weight: "medium", bagWeight: "36"},
      ]
    });
  }

  addDog = (dog) => {
    this.setState({
      dogs: [...this.state.dogs, {id: uuidV4(), ...dog}],
    })
  }

  editDog = (id) => {
    this.setState({
      editing: id,
    })
  }

  findDog = (id) => {
    return this.state.dogs.find((element) => element.id === id);
  }

  render() {
    return (
      <div>
        <h1>Puppy Chow App</h1>
        <DogForm
          onSubmit={this.addDog.bind(this)}
          editing={this.state.editing}
          dog={this.findDog(this.state.editing)} />
        <Dogs
          dogs={this.state.dogs}
          onEdit={this.editDog.bind(this)} />
      </div>
    );
  }
}
