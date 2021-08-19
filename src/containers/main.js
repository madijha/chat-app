import React, { Component } from 'react';
import {Redirect} from 'react-router-dom';
import {getAllChats, checkEmail, inviteFriend, getSingleChats} from '../components/main';
import '../css/main.css';

var id = '';
export default class main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            message: '',
            newmsg: false,
            redirect: false,
            showemailbox: false,
            invitationEmail: '',
            userDetails: {},
            chats: [],
            finalChats: [],
            singleChat: [],
            showSingleChat: false,
        }
    }
    componentDidMount() {
        if(localStorage.getItem('myDiId') !== null) {
            this.setState({userDetails: this.props.location.state}, () => {
                this.id = setInterval(() => {
                    getAllChats(this.state.userDetails.user_id)
                    .then((chats) => {
                        this.setState({chats: chats.data}, () => {
                            var result = this.state.chats.filter(function (a) {
                                var key = a.receiverUserId + '|' + a.senderUserId;
                                if (!this[key]) {
                                    this[key] = true;
                                    return true;
                                }
                            }, Object.create(null));
                            this.setState({finalChats: result}, () => console.log(this.state.finalChats));
                        });
                    });
                }, 1000);
            });
        } else{
            alert("Please login to chat");
            this.props.history.push('/login');
        }
    }
    render() {
        return (
            <div>
                <div className="mainContainer">
                    <div className="row1">
                        <div className="logo">
                            <div class="dropdown">
                                <svg data-toggle="dropdown" xmlns="http://www.w3.org/2000/svg" width="20" height="25" fill="#fff" className="bi bi-three-dots-vertical menu dropdown-toggle" viewBox="0 0 16 16">
                                    <path d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z"/>
                                </svg>
                                <div className="dropdown-menu">
                                    <a className="dropdown-item" onClick = {() => this.setState({showemailbox: true})}>Invite a friend</a>
                                    <a className="dropdown-item" href="#">Create group</a>
                                    <a className="dropdown-item" onClick={() => {
                                        localStorage.removeItem('myDiId');
                                        this.setState({redirect: true}, () => clearInterval(id));
                                    }}>
                                        Logout
                                    </a>
                                </div>
                            </div>
                            <span>dI</span>
                        </div>
                        <span>{this.state.userDetails.username}</span>
                    </div>
                    <div className="row2">
                        <div id="chatCandidates">
                            {this.state.showemailbox ? 
                                <div style={{backgroundColor: '#fff'}}>
                                    <input 
                                        onChange={(e) => this.setState({invitationEmail: e.target.value})} 
                                        type="email" placeholder="Enter email" 
                                        className="form-control" 
                                        style={{margin: '3px'}}
                                    />
                                    <input
                                        onClick={() => {
                                            if(this.state.invitationEmail === '') {
                                                alert('Please enter a valid email');
                                            }  else {
                                                checkEmail(this.state.invitationEmail).then((receiverDetails) => {
                                                    if(receiverDetails.data === 'notRegistered') {
                                                        alert("email is not registered");
                                                    } else {
                                                        const chatDetails = {
                                                            message: `${this.state.userDetails.username} invited you to start chat`,
                                                            senderId: `${this.state.userDetails.user_id}`,
                                                            senderName: `${this.state.userDetails.username}`,
                                                            receiverId: `${receiverDetails.data.user_id}`,
                                                            receiverName: `${receiverDetails.data.username}`,
                                                        }
                                                        inviteFriend(chatDetails).then((chatData) => {
                                                            console.log(chatData);
                                                            alert('invitation sent succesfully');
                                                        });
                                                    }
                                                });
                                            }
                                        }} 
                                        value="invite"
                                        type="submit"
                                        className="btn btn-primary"
                                        style={{margin: '3px'}}
                                    />
                                    <input
                                        onClick={() => this.setState({showemailbox: false})} 
                                        value="cancel"
                                        type="submit"
                                        className="btn btn-primary"
                                        style={{margin: '3px', color: '#000', backgroundColor: '#fff'}}
                                    />
                                </div>
                            : null}
                            {this.state.finalChats.map((chat, index) => {
                                if(chat.message !== null || chat.senderName !== null || chat.receiverName !== null) {
                                    if(chat.receiverUserId !== this.state.userDetails.user_id) {
                                        return(<div 
                                                key={index} 
                                                className="list" 
                                                onClick={() => {
                                                    if(id !== '') {
                                                        clearInterval(id);
                                                    }
                                                    id = setInterval(() => {
                                                            getSingleChats(chat.senderUserId, chat.receiverUserId)
                                                            .then((singleMesssage) => this.setState({singleChat: singleMesssage.data, showSingleChat: true}, () => console.log(this.state.singleChat)));
                                                    }, 3000);
                                                }}  
                                                >
                                            <div id="user">
                                                <span>{chat.receiverName}</span>
                                                {this.state.newmsg ? 
                                                    <span className="badge badge-pill badge-primary">1</span>
                                                : null}
                                            </div>
                                            <div id="msgextract">{chat.message}</div>
                                        </div>)
                                    } else if(chat.senderUserId !== this.state.userDetails.user_id) {
                                        return (<div 
                                                    key={index} className="list" 
                                                    onClick={() => {
                                                        if(id !== '') {
                                                            clearInterval(id);
                                                        }
                                                        id = setInterval(() => {
                                                                getSingleChats(chat.senderUserId, chat.receiverUserId)
                                                                .then((singleMesssage) => this.setState({singleChat: singleMesssage.data, showSingleChat: true}, () => console.log(this.state.singleChat)));
                                                        }, 3000);
                                                    }}
                                                >
                                            <div id="user">
                                                <span>{chat.senderName}</span>
                                                {this.state.newmsg ? 
                                                    <span className="badge badge-pill badge-primary">1</span>
                                                : null}
                                            </div>
                                            <div id="msgextract">{chat.message}</div>
                                        </div>)
                                    }
                                }
                            })}
                        </div>
                        {this.state.showSingleChat ?
                            <div id="messageView">
                                <div id="messages"> 
                                    {this.state.singleChat.map((chat, index) => {
                                        return (
                                            <div key={index}>{chat.message}</div>
                                        )
                                    })}
                                </div>
                                <div id="chatbox">
                                    <div className="elements">
                                        <input type="text" onChange={(e) => this.setState({message: e.target.value})} placeholder="your message" />
                                        <span onClick={() => {
                                            const chatDetails = {
                                                message: `${this.state.message}`,
                                                senderId: `${this.state.singleChat[0].senderUserId}`,
                                                senderName: `${this.state.singleChat[0].senderName}`,
                                                receiverId: `${this.state.singleChat[0].receiverUserId}`,
                                                receiverName: `${this.state.singleChat[0].receiverName}`,
                                            }
                                            inviteFriend(chatDetails).then((chatData) => {
                                                console.log(chatData);
                                            });
                                        }}>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="#fe4a49" className="bi bi-cursor-fill send" viewBox="0 0 16 16">
                                                <path d="M14.082 2.182a.5.5 0 0 1 .103.557L8.528 15.467a.5.5 0 0 1-.917-.007L5.57 10.694.803 8.652a.5.5 0 0 1-.006-.916l12.728-5.657a.5.5 0 0 1 .556.103z"/>
                                            </svg>
                                        </span>
                                    </div>
                                </div>
                            </div>
                        : null}
                    </div>
                </div>
                {this.state.redirect ? <Redirect to="/home" /> : null}
            </div>     
        )
    }
}
