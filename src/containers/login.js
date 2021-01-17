import React, { Component } from 'react';
import Navbar from '../includes/navbar';
import {NavLink, Redirect} from 'react-router-dom';
import {signInWithGoogle, loginHandler} from '../components/login';
import '../css/login.css';

export default class login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            redirect: false,
            userDetails: {},
        };
    }
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
                                <input type="email" className="form-control" placeholder="Enter email" id="email" onChange={(event) => this.setState({email: event.target.value})} required/>
                            </div>
                            <button 
                                onClick={() => 
                                    loginHandler(this.state.email)
                                    .then((loginData) => {
                                        if(loginData.data === 'notRegistered') {
                                            alert("Email not registered. Please register now to continue");
                                        } else if(loginData.data === 'extra') {
                                            alert("This email is registered more than once. Please contact admin to continue");
                                        } else {
                                            localStorage.setItem('myDiId', loginData.data.user_id);
                                            this.setState({userDetails: loginData.data}, () => this.props.history.push('/main', loginData.data));
                                        }
                                    })} 
                                type="submit" 
                                className="btn btn-block"
                            >
                                Login
                            </button>
                            <button 
                                onClick={() => {
                                    signInWithGoogle().then((data) => {
                                        loginHandler(data.additionalUserInfo.profile.email)
                                        .then((loginData) => {
                                            if(loginData.data === 'notRegistered') {
                                                alert("Email not registered. Please register now to continue");
                                            } else if(loginData.data === 'extra') {
                                                alert("This email is registered more than once. Please contact admin to continue");
                                            } else {
                                                this.setState({userDetails: loginData}, () => this.props.history.push('/main'));
                                            }
                                        });
                                    });
                                }} 
                                type="submit" 
                                className="btn btn-block" 
                                style={{backgroundColor: '#fff', color: '#fe4a49'}}
                            >
                                Login with google
                            </button>  
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
