import React, { Component } from 'react';
import DogForm from './DogForm';
import Dogs from './Dogs';
import uuidV4 from 'uuid/v4';
import { Route, Switch } from 'react-router-dom';

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
        <Switch>
          <Route
            path="/dogs/new"
            render={(props) => (
              <DogForm onSubmit={this.addDog.bind(this)} />
            )} />
          <Route
            path="/dogs"
            render={(props) => (
              <Dogs dogs={this.state.dogs} />
            )} />
        </Switch>
      </div>
    );
  }
}
