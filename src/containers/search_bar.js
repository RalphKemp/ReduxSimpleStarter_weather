import React, { Component } from 'react';

export default class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = { term: ''};

    this.onInputChange = this.onInputChange.bind(this);
    // 'this' which is our instance of searchbar has a function called onInputChange.
    // bind that function to (this) which is searchbar, then replace onInputChange with
    // this new bound instance (this.onInputChange) of the onInputChange function below.
    // So it's basically saying take the existing function, bind it with this, and then replace the existing function with it.
  }

  onInputChange(event) {
    this.setState({ term: event.target.value});
  }

  onFormSubmit(event) {
    event.preventDefault();
    // this just literally prevents the default action of the form, (submitting).
  }

  render() {
    return (
      <form  onSubmit ={this.onFormSubmit} className="input-group">
        <input
          placeholder="Get a five-day forecast in your favourite cities!"
          className="form-control"
          value={this.state.term}
          onChange={this.onInputChange}/>
        <span className="input-group-btn">
          <button type="submit" className="btn btn-secondary">Submit</button>
        </span>
      </form>
    );
  }
}
