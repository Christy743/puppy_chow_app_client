import React, { Component } from 'react';

export default class DogForm extends Component {
  constructor(props) {
    super(props);

    this.initialState = {
      id: null,
      name: "",
      weight: "",
      bagWeight: "",
    };
    this.state = this.initialState;
  }

  componentWillReceiveProps(nextProps) {
    const { id, name, weight, bagWeight } = nextProps.dog;

    if(id && this.props.editing !== nextProps.editing) {
      this.setState({
        id: id,
        name: name,
        weight: weight,
        bagWeight: bagWeight,
      });
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
              value={this.state.name}
              type="text"
              name="name"
              onChange={(event) => this.handleChange(event)} />
            <br />
            <br />
            <label htmlFor="weight">Puppy Weight</label>
            <input
              value={this.state.weight}
              type="text"
              name="weight"
              onChange={(event) => this.handleChange(event)} />
            <br />
            <br />
            <label htmlFor="bagWeight">Dog Food Bag Weight</label>
            <input
              value={this.state.bagWeight}
              type="text"
              name="bagWeight"
              onChange={(event) => this.handleChange(event)} />
            <br />
            <br />
            <input type="submit" />
          </form>
      </div>
    );
  }
}
