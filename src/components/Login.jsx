import React from 'react';
import { withRouter } from 'react-router';
import firebase from 'firebase';

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      username: '',
      password: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    const stateObj = {};
    const stateKey = e.target.name;
    stateObj[stateKey] = e.target.value;
    this.setState(stateObj);
  }

  handleSubmit() {
    const { username, password } = this.state;
    firebase.auth()
      .signInWithEmailAndPassword(username, password)
      .catch((err) => {
        const errorCode = err.code;
        const errorMessage = err.message;
        console.log(err);
      })
      .then(() => {
        this.props.router.push('/BookList');
      })
  }

  render() {
    return (
      <div>
      <h1>This Is Sprtn</h1>
        <div id="login-form">
          <div>
            <input name="username" onChange={this.handleChange} type="text" placeholder="username" />
          </div>
          <div>
            <input name="password" onChange={this.handleChange} type="password" placeholder="password" />
          </div>
          <button className="logButton" onClick={this.handleSubmit}>Log In</button>
        </div>
      </div>
    );
  }
}

export default withRouter(Login);
