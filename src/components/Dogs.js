import React, { Component } from 'react';

export default class Dogs extends Component {

  render() {
    const { dogs } = this.props;

    const dogsList = dogs.map((dog, index) => {
      return (
        <li key={index}>
          {dog.name} - {dog.weight} - {dog.bagWeight}
        </li>
      );
    });

    return (
        <ul>
          {dogsList}
        </ul>
    );
  }
}
