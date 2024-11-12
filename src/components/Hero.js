import React from 'react'
import { Link } from "react-router-dom";
import heroStyle from './components.module.css/Hero.module.css'
import heroImage from '../images/hero-image.jpg'

const Hero = () => {
    return (
        <div className={heroStyle.hero}>
            <div className={heroStyle.partOne}>
                <h1>Little Lemon</h1>
                <h3>Chicago</h3>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iste ex maxime cupiditate similique eos magnam, libero aspernatur nulla incidunt consequuntur suscipit. Optio rerum voluptate officia, autem sequi ipsum tenetur voluptas, at molestias totam eius molestiae. Veniam mollitia deserunt unde! Dolores eius esse blanditiis rerum beatae ipsam assumenda culpa nesciunt expedita?</p>

                <Link to="/booking-a-table-on-the-little-lemon-website-react/reservations">
                    <button>Reserve a Table</button>
                </Link>
            </div>

            <img src={heroImage} alt="image6" className={heroStyle.image} />
        </div >
    )
}

export default Hero