import React, { Component } from 'react';

export default class DogForm extends Component {
  constructor(props) {
    super(props)

    this.state = {
      name: "",
    }
  }

  handleChange = (event) => {
    debugger;
  }

  render() {
    return (
      <div>
        <h2>Dog Form</h2>
          <form>
            <label htmlFor="name">Puppy Name</label>
            <input type="text"
                   name="name"
                   onChange={(event) => this.handleChange(event)} />
            <br />
            <br />
            <label htmlFor="weight">Puppy Weight</label>
            <input type="number" name="weight" />
            <br />
            <br />
            <label htmlFor="food">Food Weight</label>
            <input type="number" name="food" />
            <br />
            <br />
            <input type="submit" />
          </form>
      </div>
    );
  }
}
