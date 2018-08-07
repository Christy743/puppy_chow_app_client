import React, { Component } from 'react';

export default class DogForm extends Component {
  constructor(props) {
    super(props)

    this.state = {
      name: "",
      weight: "",
      food: "",
    }
  }

  handleChange = (event) => {
    const { name, value } = event.target;

    this.setState({[name]: value});
  }

handleOnSubmit = (event) => {
  event.preventDefault();
  this.props.onSubmit(this.state);
  this.setState(this.initialState);
}

  render() {
    return (
      <div>
        <h2>Dog Form</h2>
          <form onSubmit={(event) => this.handleOnSubmit(event)} >
            <label htmlFor="name">Puppy Name</label>
            <input
              type="text"
              name="name"
              value={this.state.name}
              onChange={(event) => this.handleChange(event)}
            />
            <br />
            <br />
            <label htmlFor="weight">Puppy Weight</label>
            <input
              type="text"
              name="weight"
              value={this.state.weight}
              onChange={(event) => this.handleChange(event)}
            />
            <br />
            <br />
            <label htmlFor="food">Food Weight</label>
            <input
              type="text"
              name="food"
              value={this.state.food}
              onChange={(event) => this.handleChange(event)}
            />
            <br />
            <br />
            <input type="submit" />
          </form>
      </div>
    );
  }
}
