import React, { Component } from 'react';
import Navbar from '../includes/navbar';
import {NavLink} from 'react-router-dom';
import '../css/register.css';
import { throwStatement } from '@babel/types';

export default class login extends Component {
    constructor(props) {
        super(props)
        this.state = {
            username: '',
            email: '',
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
                                onClick={() => {
                                    if(this.state.username === '') {
                                        alert('Username cannot be empty');
                                    } else if(this.state.email === '') {
                                        alert('email cannot be empty');
                                    } else {
                                        console.log(this.state.username, this.state.email);
                                    }
                                }} 
                                type="submit" 
                                className="btn btn-block"
                            >
                                Login
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
