import React, { Component } from 'react';
import Calendar from 'react-calendar';

// Name, Weight

export default class DogForm extends Component {

  state = {
    date: new Date(),
  }

  onChange = date => this.setState({ date })

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
            <input type="submit" />
          </form>

          <div>
            <Calendar
              onChange={this.onChange}
              value={this.state.date}
            />
          </div>
      </div>
    );
  }
}
