import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Navbar extends Component {
  render() {
    return (
      <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
        <Link to="/" className="navbar-brand">JournalApp</Link>
        <div className="collapse navbar-collapse">
        <ul className="navbar-nav mr-auto">
          <li className="navbar-item">
          <Link to="/login" className="nav-link">Login</Link>
          </li>
          <li className="navbar-item">
          <Link to="/register" className="nav-link">Register</Link>
          </li>
          <li className="navbar-item">
          <Link to="/submit" className="nav-link">Submit</Link>
          </li>
          <li className="navbar-item">
          <Link to="/review" className="nav-link">Review</Link>
          </li>
          <li className="navbar-item">
          <Link to="/journal" className="nav-link">Journal</Link>
          </li>
        </ul>
        </div>
      </nav>
    );
  }
}
