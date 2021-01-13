import React, { Component } from 'react';
import Navbar from '../includes/navbar';
import {NavLink} from 'react-router-dom';
import '../css/login.css';

export default class login extends Component {
    componentDidMount() {
        document.body.style.backgroundColor = "#f4f4f8";
    }
    render() {
        return (
            <div>
                <div id="loginmain" >
                    <Navbar />
                    <div className="wrapper">
                        <div id="loginform">
                            <div class="form-group">
                                <label for="email">Email address:</label>
                                <input type="email" className="form-control" placeholder="Enter email" id="email" required/>
                            </div>
                            <button onClick={() => console.log('form submitted')} type="submit" className="btn btn-primary btn-block">Login</button> 
                            <NavLink className="registerlink" to="/register">Not yet registered? Register now</NavLink>
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
