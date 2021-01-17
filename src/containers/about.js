import React, { Component } from 'react'
import Navbar from '../includes/navbar';
import '../css/about.css';

export default class about extends Component {
    componentDidMount() {
        document.body.style.backgroundColor = "#fff"
    }
    render() {
        return (
            <div>
                <Navbar />
                <div className="about">
                    <p>
                        Business software is clunky, expensive, hard to setup and
                        frustrating to use. Countless hours are wasted trying to customize these solutions and they often require expensive professional services to get everything to work. In the end, the solution becomes so complex that businesses need to hire full-time employees to babysit the software.
                    </p>
                    <p>
                        We believe your business deserves better software - software that’s ready to go, easy to setup and use, and requires minimal customization. All of our products live up to this promise and are backed by our world-class support. And the best part is, you don’t have to break the bank to get them working.
                    </p>
                </div>
            </div>
        )
    }
}
