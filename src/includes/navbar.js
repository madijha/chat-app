import React, { Component } from 'react';
import {NavLink} from 'react-router-dom';
import '../css/navbar.css';

export default class Navbar extends Component {
  render() {
    return (
        <div>
            <ul id="navbar" className="nav">
                <li className="nav-item">
                    <NavLink className="nav-link header" to="/" onClick={() => console.log('homepage')}>dI</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink className="nav-link" to="/" onClick={() => console.log('homepage')}>Home</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink className="nav-link" to="/about">About us</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink className="nav-link" to="/login">Login</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink className="nav-link" to="/register">Register</NavLink>
                </li>
            </ul>
        </div>
    );
  }
}
