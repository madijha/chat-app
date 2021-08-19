import React, { Component } from 'react';
import Navbar from '../includes/navbar';
import '../css/home.css';
import image1 from '../images/carousal-1.jpeg';
import image2 from '../images/carousal-2.jpeg';
import image3 from '../images/carousal-3.jpeg';
import image4 from '../images/img1.jpeg';
import image5 from '../images/img2.jpg';
import image6 from '../images/img3.png';

export default class home extends Component {
    componentDidMount() {
        document.body.style.backgroundColor = "#fff"
    }
    render() {
        return (
            <div>
                <Navbar />
                <div id="demo" class="carousel slide" data-ride="carousel">
                    <ul class="carousel-indicators">
                        <li data-target="#demo" data-slide-to="0" class="active"></li>
                        <li data-target="#demo" data-slide-to="1"></li>
                        <li data-target="#demo" data-slide-to="2"></li>
                    </ul>
                    <div class="carousel-inner">
                        <div class="carousel-item active">
                            <img src={image1} alt="Los Angeles" />
                            <div class="carousel-caption">
                                <h3 className="animate__animated animate__jackInTheBox">dI</h3>
                                <p className="animate__animated animate__jackInTheBox">Lorem ipsum dolor</p>
                            </div>   
                        </div>
                        <div class="carousel-item">
                            <img src={image2} alt="Chicago" />
                            <div class="carousel-caption">
                                <h3 className="animate__animated animate__jackInTheBox">dI</h3>
                                <p className="animate__animated animate__jackInTheBox">Lorem ipsum dolor</p>
                            </div>   
                        </div>
                        <div class="carousel-item">
                            <img src={image3} alt="New York" width="1100" height="500" />
                            <div class="carousel-caption">
                                <h3 className="animate__animated animate__jackInTheBox">dI</h3>
                                <p className="animate__animated animate__jackInTheBox">Lorem ipsum dolor</p>
                            </div>   
                        </div>
                    </div>
                    <a class="carousel-control-prev" href="#demo" data-slide="prev">
                        <span class="carousel-control-prev-icon"></span>
                    </a>
                    <a class="carousel-control-next" href="#demo" data-slide="next">
                        <span class="carousel-control-next-icon"></span>
                    </a>
                </div>
                <div className="intro">
                    <h1>Who We Are</h1>
                    <p className="animate__animated animate__jackInTheBox">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
                    <p className="animate__animated animate__jackInTheBox">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
                    <p className="animate__animated animate__jackInTheBox">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
                    <p className="animate__animated animate__jackInTheBox">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
                </div>
                <div className="product">
                    <h1>Our Product</h1>
                    <div className="pdesc">
                        <div>
                            <h3>Robust interface</h3>
                            <img src={image4} alt="New York" width="250" height="200" />
                            <p className="animate__animated animate__flipInX">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
                            <p className="animate__animated animate__flipInX">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
                        </div>
                        <div>
                            <h3>Sleek design</h3>
                            <img src={image5} alt="New York" width="250" height="200" />
                            <p className="animate__animated animate__flipInX">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
                            <p className="animate__animated animate__flipInX">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
                        </div>
                        <div>
                            <h3>Vast community</h3>
                            <img src={image6} alt="New York" width="250" height="200" />
                            <p className="animate__animated animate__flipInX">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
                            <p className="animate__animated animate__flipInX">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
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