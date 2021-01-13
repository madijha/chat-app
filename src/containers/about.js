import React, { Component } from 'react'
import Navbar from '../includes/navbar';

export default class about extends Component {
    componentDidMount() {
        document.body.style.backgroundColor = "#fff"
    }
    render() {
        return (
            <div>
                <Navbar />
                <h1>about page</h1>
            </div>
        )
    }
}
