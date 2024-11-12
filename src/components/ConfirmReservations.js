import React from 'react'
import { Link } from 'react-router-dom'
import confirmReservationsFormStyle from './components.module.css/ConfirmReservations.module.css'
import lemonLogo from '../images/logo/lemon-logo.png'
import Header from './Header'
import Footer from './Footer'

const ConfirmReservations = () => {
    const handleSubmit = (e) => {
        e.preventDefault()
    }

    return (
        <div>
            <Header />

            <div className={confirmReservationsFormStyle.reservationsForm}>
                <form action="" onSubmit={handleSubmit}>
                    <div className={confirmReservationsFormStyle.reservationsBox}>
                        <h1>The Reservation has been confirmed.</h1>
                        <img src={lemonLogo} alt="logo" />
                        <h3>Please check your Email for more information!</h3>

                        <div className={confirmReservationsFormStyle.reservationsNote}>
                            <h3>Note</h3>
                            <p>The table that you have been reserved will be cancled after 15 minutes if you are late.</p>
                        </div>

                        <div className={confirmReservationsFormStyle.reservationsLine}></div>

                        <Link to='/booking-a-table-on-the-little-lemon-website-react'>
                            <button>Confirm</button>
                        </Link>
                    </div>
                </form>
            </div>

            <Footer />
        </div>
    )
}

export default ConfirmReservations