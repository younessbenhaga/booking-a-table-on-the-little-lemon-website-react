import React from 'react'
import { Link } from "react-router-dom";
import FooterLogo from '../images/logo/footer-logo.png'
import footerStyle from './components.module.css/Footer.module.css'

const Footer = () => {
    return (
        <div className={footerStyle.footer}>
            <div className={footerStyle.footerBox}>
                <img src={FooterLogo} alt="logo" />

                <div className={footerStyle.footerList}>
                    <div className={footerStyle.doormat}>
                        <h4>Doormat Navigation</h4>

                        <ul>
                            <li>
                                <Link to="/booking-a-table-on-the-little-lemon-website-react">Home</Link>
                            </li>
                            <li>
                                <Link to="/booking-a-table-on-the-little-lemon-website-react/about">About</Link>
                            </li>
                            <li>
                                <Link to="/booking-a-table-on-the-little-lemon-website-react/menu">Menu</Link>
                            </li>
                            <li>
                                <Link to="/booking-a-table-on-the-little-lemon-website-react/reservations">Reservations</Link>
                            </li>
                            <li>
                                <Link to="/booking-a-table-on-the-little-lemon-website-react/login">Login</Link>
                            </li>
                        </ul>
                    </div>

                    <div className={footerStyle.contact}>
                        <h4>Contact</h4>

                        <ul>
                            <li>Address</li>
                            <li>phone number</li>
                            <li>email</li>
                        </ul>
                    </div>

                    <div className={footerStyle.social}>
                        <h4>Social media links</h4>

                        <ul>
                            <li>Address</li>
                            <li>phone number</li>
                            <li>email</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer