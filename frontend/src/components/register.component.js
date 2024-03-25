import React, { Component } from 'react';
import axios from 'axios';

export default class Register extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: '',
      password: '',
    }
  }

  onChangeUsername = (e) => {
    this.setState({
      username: e.target.value
    })
  }

  onChangePassword = (e) => {
    this.setState({
      password: e.target.value
    })
  }

  onSubmit = (e) => {
    e.preventDefault();

    const user = {
      username: this.state.username,
      password: this.state.password,
    }

    console.log(user);

    axios.post('http://localhost:5000/users/register', user)
      .then(res => console.log(res.data));

    this.setState({
      username: '',
      password: '',
    })
  }

  render() {
    return (
      <div>
        <h3>Register</h3>
        <form onSubmit={this.onSubmit}>
          <div className="form-group"> 
            <label>Username: </label>
            <input  type="text"
                required
                className="form-control"
                value={this.state.username}
                onChange={this.onChangeUsername}
                />
          </div>
          <div className="form-group">
            <label>Password: </label>
            <input 
                type="password" 
                className="form-control"
                value={this.state.password}
                onChange={this.onChangePassword}
                />
          </div>
          <div className="form-group">
            <input type="submit" value="Register" className="btn btn-primary" />
          </div>
        </form>
      </div>
    )
  }
}
