import React, { Component } from 'react';
import Navbar from '../includes/navbar';

export default class home extends Component {
    componentDidMount() {
        document.body.style.backgroundColor = "#fff"
    }
    render() {
        return (
            <div>
                <Navbar />
                <h1>homepage</h1>
            </div>
        )
    }
}