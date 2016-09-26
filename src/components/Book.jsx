import React from 'react';
import request from 'superagent';
import { withRouter } from 'react-router';

const propTypes = {
  bookImage: React.PropTypes.string,
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
    return (
      <div className="bookOnList" onClick={this.goToBookView}>
        <div>
          <img src={'http://i.imgur.com/p0Kfth0.jpg'} alt="boohoo" id="book"/>
        </div>
      </div>
    );
  }
};

Book.propTypes = propTypes;

export default withRouter(Book);
