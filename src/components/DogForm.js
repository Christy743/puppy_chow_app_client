import React, { Component } from 'react';

// Name, Weight

export default class DogForm extends Component {
  render() {
    return (
      <div>
        <h2>Dog Form</h2>
          <form>
            <label for="name">Puppy Name</label>
            <input type="text" name="name" />
            <br />
            <br />
            <label for="weight">Puppy Weight</label>
            <input type="number" name="weight" />
            <br />
            <br />
            <label for="foodWeight">Food Weight</label>
            <input type="number" name="foodWeight" />
            <br />
            <br />
            <label for="datepicker">Purchased</label>
            <input type="datepicker" name="datepicker" />
            <br />
            <br />
            <input type="submit" />
          </form>
      </div>
    );
  }
}
