import React, { Component } from 'react';

export default class Dogs extends Component {
  handleOnClick = (id, event) => {
    this.props.onEdit(id);
  }

  render() {
    const { dogs } = this.props;

    const dogsList = dogs.map((dog, index) => {
      return (
        <li key={index}>
          {dog.name} - {dog.weight} - {dog.bagWeight}
          <button onClick={(event) => this.handleOnClick(dog.id, event)} >
            Edit Dog
          </button>
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
