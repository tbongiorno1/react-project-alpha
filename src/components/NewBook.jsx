import React from 'react';
import firebase from 'firebase';
import { Link } from 'react-router';

class NewBook extends React.Component{
  constructor() {
    super();
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleSubmit(e) {
    e.preventDefault();
    this.props.httpSave({
      make: this.state.localMake,
      model: this.state.localModel,
      description: this.state.localDescription,
    });
    this.props.redirect();
  }
  render() {
    return (
      <div>
        <h1>New Book</h1>
        <form onSubmit={this.handleSubmit}>
          <input name="title" value={this.state.localMake} onChange={this.handleEditMake} />
          <input name="" value={this.state.localModel} onChange={this.handleEditModel} />
          <input type="submit" />
        </form>
      </div>
    );
  }
}

export default NewBook;
