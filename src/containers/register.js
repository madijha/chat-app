import React, { Component } from 'react';
import Navbar from '../includes/navbar';
import {NavLink} from 'react-router-dom';
import '../css/register.css';

export default class login extends Component {
    componentDidMount() {
        document.body.style.backgroundColor = "#f4f4f8";
    }
    render() {
        return (
            <div>
                <div id="registermain" >
                    <Navbar />
                    <div className="wrapper">
                        <div id="loginform">
                            <div class="form-group">
                                <label for="name">Username:</label>
                                <input type="text" className="form-control" placeholder="Enter username" id="name" required/>
                                <label for="email">Email address:</label>
                                <input type="email" className="form-control" placeholder="Enter email" id="email" />
                            </div>
                            <button onClick={() => console.log('form submitted')} type="submit" className="btn btn-primary btn-block">Login</button> 
                            <NavLink className="registerlink" to="/login">Already registered? Login</NavLink>
                        </div>
                    </div>
                </div>
                <footer>
                    <p>di.com - copyright &copy; 2021 </p>
                </footer>
            </div>
        )
    }
}
