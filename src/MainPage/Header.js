import React, { Component } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import { Link } from 'react-router-dom'
import './HeaderElement.css';
export class Header extends Component {
    render() {
        return (
            <div className="header-wrapper" id="home">

                <div className="header-part-text">
                    <h1 style={{ color: '#fff', fontSize: '45px' }}>RoboMarketga</h1>
                    <h1 style={{ color: '#fff', fontSize: '45px', marginBottom: '30px' }}>Xush kelibsiz</h1>
                    <span className="btns">
                        <Link to='/maxsulotlar' className="btn btn-first">Xaridlar</Link>
                        <a href="#about" style={{ textDecoration: 'none' }} className="btn btn-second">Aloqa</a>
                    </span>
                </div>
                <div className="header-part-img">
                    <Carousel autoPlay={true} stopOnHover={false} interval={5000} showArrows={true} showStatus={false} useKeyboardArrows={true} showThumbs={false} infiniteLoop={true}>
                        <div className="img-wrapper">
                            <div className="header-part-parda"></div>
                            <img src="main_img/home1.jpg" alt="arduino" className="home1" />
                        </div>
                        <div className="img-wrapper">
                            <div className="header-part-parda"></div>
                            <img src="main_img/home4.jpg" alt="arduino" />
                        </div>
                        <div className="img-wrapper">
                            <div className="header-part-parda"></div>
                            <img src="main_img/home2.jpg" alt="arduino" />
                        </div>

                    </Carousel>
                </div>
            </div>
        )
    }
}