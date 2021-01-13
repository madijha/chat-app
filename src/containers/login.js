import React, { Component } from 'react'
import Navbar from '../includes/navbar';

export default class login extends Component {
    componentDidMount() {
        document.body.style.backgroundColor = "#f4f4f8"
    }
    render() {
        return (
            <div>
                <Navbar />
                <h1>Login</h1>
            </div>
        )
    }
}
