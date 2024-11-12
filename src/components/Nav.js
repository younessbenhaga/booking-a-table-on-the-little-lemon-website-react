import React from 'react'
import { Link } from "react-router-dom";
import HeaderLogo from '../images/logo/header-logo.png'
import navStyle from './components.module.css/Nav.module.css'

const Nav = () => {
    return (
        <div className={navStyle.nav}>
            <Link to="/booking-a-table-on-the-little-lemon-website-react">
                <img src={HeaderLogo} alt="logo" />
            </Link>

            <div className={navStyle.headerLogoLine}></div>

            <div className={navStyle.navList}>
                <ul>
                    <li>
                        <Link to="/booking-a-table-on-the-little-lemon-website-react">Home</Link>
                    </li>
                    <li>
                        <Link to="/booking-a-table-on-the-little-lemon-website-react/about">About</Link>
                    </li>
                    <li>
                        <Link to="/booking-a-table-on-the-little-lemon-website-react/reservations">Reservations</Link>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Nav;