import React, { Component } from 'react';
import { Link } from 'react-router';
import firebase from 'firebase';

const propTypes = {
  children: React.PropTypes.element,
};

class Main extends Component {
  constructor() {
    super();
    this.state = {
      loggedIn: false,
    };
    this.signOut = this.signOut.bind(this);
  }
  componentWillMount() {
    setTimeout(() => {
      firebase.auth().onAuthStateChanged((user) => {
        this.setState({
          loggedIn: (user !== null),
        });
      });
    }, 200);
  }

  signOut() {
    firebase.auth()
      .signOut()
      .then(() => {
        console.log('user signed out');
      });
  }

  loggedInLinks() {
    if (!this.state.loggedIn) {
      return (
        <div>
          <Link to="/login" id="login">Login || </Link>
          <Link to="/register" id="register">Register</Link>
        </div>
      );
    } else {
      return (
        <div id="sign-out">
          <Link to= "/login" onClick={this.signOut}> Sign Out</Link>
        </div>
      );
    }
  }
  render() {
    return (
      <div>
        <div id="main-nav">
          {
            this.loggedInLinks()
          }
        </div>
        <div id="main-content">
          {this.props.children}
        </div>
      </div>
    );
  }
}

Main.propTypes = propTypes;

export default Main;
