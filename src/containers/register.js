import React, { Component } from 'react';
import Navbar from '../includes/navbar';
import {NavLink} from 'react-router-dom';
import { registerHandler } from '../components/register';
import '../css/register.css';
var Spinner = require('react-spinkit');

export default class login extends Component {
    constructor(props) {
        super(props)
        this.state = {
            username: '',
            email: '',
            showLoader: false,
            buttonDisable: false,
        }
    }
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
                                <input type="text" className="form-control" placeholder="Enter username" id="name" onChange={(event) => this.setState({username: event.target.value})} required />
                                <label for="email">Email address:</label>
                                <input type="email" className="form-control" placeholder="Enter email" id="email" onChange={(event) => this.setState({email: event.target.value})} required />
                            </div>
                            <button
                                disabled={this.state.buttonDisable}
                                onClick={() => {
                                    this.setState({showLoader: true, buttonDisable: true}, () => {
                                        if(this.state.username === '') {
                                            alert('Username cannot be empty');
                                        } else if(this.state.email === '') {
                                            alert('Email cannot be empty');
                                        } else {
                                            registerHandler().then((data) => {
                                                alert(data);
                                            });
                                        }
                                    })
                                }} 
                                type="submit" 
                                className="btn btn-block"
                            >
                                {this.state.showLoader ?
                                    <div>
                                        <Spinner name="three-bounce" color="#fff " />
                                    </div> : 'Login'}
                            </button>
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
