import React, { Component } from 'react'
import "./SiteFooter.css"

export class FooterSide extends Component {
    render() {
        return (
            <div className="footerSide" id="about">
                <div className="connectUs">
                    <h2>Biz bilan bog'laning</h2>
                    <div className="messengerWrapper">
                        <a href="https://t.me/shodligim_23" target="_blank"><i className="fab fa-fw fa-telegram"></i>Telegram</a>
                        <a href="#"><i className="fab fa-fw fa-instagram"></i>Instagram</a>
                        <a href="#"><i className="fab fa-fw fa-youtube"></i>YouTube</a>
                        <a href="#"><i className="fab fa-fw fa-facebook"></i>Facebook</a>
                    </div>
                </div>

                <div className="infoAboutUs-one">
                    <span>
                        <h4>Bizning manzil</h4>
                        <p>Andijon shahar Lermontov ko'chasi 45-uy</p>
                    </span>
                    <span>
                        <h4>Biz bilan aloqa</h4>
                        <p>+998 99 8084567</p>
                    </span>
                    <span>
                        <h4>Email</h4>
                        <p>robomarket@gmail.com</p>
                    </span>
                    <span>
                        <h4>Mo'ljal</h4>
                        <p>Semurg oshxonasi to'g'risida</p>
                        <p>RED TAG supermarket yaqinida</p>
                    </span>
                </div>
                <div className="infoAboutUs-two">
                    <span>
                        <img src="main_img/location.png" alt="location" className="location" />
                    </span>

                </div>
            </div>

        )
    }
}