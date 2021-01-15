import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
var Spinner = require('react-spinkit');

export default class splash extends Component {
    constructor(props) {
        super(props);
        this.state = {
            redirect: false,
        };
    }
    componentDidMount(){
        this.id = setTimeout(() => this.setState({redirect: true}), 8000);
        console.log(uuidv4());
    }
    componentWillUnmount() {
        clearTimeout(this.id);  
    }
    render() {
        return this.state.redirect ? <Redirect to='/home' /> : (
        <div style={{display: 'flex', height: '100vh', justifyContent: 'center', alignItems: 'center', flexDirection: 'column'}}>
            <Spinner name="line-scale-pulse-out-rapid" color="#fe4a49" />
        </div>)
    }
}
