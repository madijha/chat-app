import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { getUserDetails } from '../components/splash';
var Spinner = require('react-spinkit');

export default class splash extends Component {
    constructor(props) {
        super(props);
        this.state = {
            redirectHome: false,
            redirectMain: false,
        };
    }
    componentDidMount(){
        this.id = setTimeout(() => {
            if(localStorage.getItem('myDiId') === null) {
                this.props.history.push('/home');
            } else if(localStorage.getItem('myDiId') !== null) {
                getUserDetails(localStorage.getItem('myDiId')).then((loginData) => {
                    console.log(loginData);
                    if(loginData.data === 'notexists') {
                        this.props.history.push('/home');
                    } else {
                        this.props.history.push('/main', loginData.data)
                    }
                });
            }
        }, 8000);
        //console.log('on splash screen', localStorage.getItem('myDiId'));
    }
    componentWillUnmount() {
        clearTimeout(this.id);  
    }
    render() {
        return(
            <div>
                <div style={{display: 'flex', height: '100vh', justifyContent: 'center', alignItems: 'center', flexDirection: 'column'}}>
                        <Spinner name="line-scale-pulse-out-rapid" color="#fe4a49" />
                </div>
            </div>
        )
    }
}
