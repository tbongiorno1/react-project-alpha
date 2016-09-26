import React from 'react';
import request from 'superagent';
import { withRouter } from 'react-router';

const propTypes = {
  data: React.PropTypes.object,
  // author: React.PropTypes.string.isRequired,
  // description: React.PropTypes.string.isRequired,
};

class Book extends React.Component {
  constructor() {
    super();
    this.goToBookView = this.goToBookView.bind(this);
  }
  goToBookView() {
    this.props.router.push('/BookView');
  }
  render() {
    const { title, authors } = this.props.data;
    return (
      <div className="bookOnList" >
        <div onClick={this.goToBookView}>
        <h1>{title} By:{authors}</h1>
          
        </div>
        <button onClick={this.goDeleteCover}>x</button>
      </div>
    );
  }
};

Book.propTypes = propTypes;

export default withRouter(Book);
