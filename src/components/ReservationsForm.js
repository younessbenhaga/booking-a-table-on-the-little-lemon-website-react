import React, { useState } from 'react'
import reservationsFormStyle from './components.module.css/ReservationsForm.module.css'
import Header from './Header'
import Footer from './Footer'
import reservationsHeaderLogo from '../images/logo/header-logo.png'
import reservationsFooterLogo from '../images/logo/footer-logo.png'

const ReservationsForm = (props) => {
    const [date, setDate] = useState('')
    const [guest, setGuest] = useState('')
    const [time, setTime] = useState('')
    const [occasion, setOccasion] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        props.submitForm(e)
    }

    return (
        <div>
            <Header />

            <div className={reservationsFormStyle.reservationsForm}>
                <form action="" onSubmit={handleSubmit}>
                    <div className={reservationsFormStyle.reservationsBox}>
                        <img src={reservationsHeaderLogo} alt="logo" className={reservationsFormStyle.headerLogo} />

                        <div className={reservationsFormStyle.headerLogoLine}></div>

                        <div className={reservationsFormStyle.reservationsLargePart}>
                            <div className={reservationsFormStyle.partOne}>
                                <div className={reservationsFormStyle.date}>
                                    <label htmlFor="date">Date</label>
                                    <input
                                        type="date"
                                        name="date"
                                        id="date"
                                        value={date}
                                        onChange={(e) => {
                                            setDate(e.target.value)
                                            props.dispatch(e.target.value)
                                        }}
                                        required
                                    />
                                </div>

                                <div className={reservationsFormStyle.guest}>
                                    <label htmlFor="guest">Number of guests</label>
                                    <select
                                        name="guest"
                                        id="guest"
                                        value={guest}
                                        onChange={(e) => setGuest(e.target.value)}
                                        required
                                    >
                                        <option value="''">--</option>
                                        <option value="2-guests">02 Guests</option>
                                        <option value="3-guests">03 Guests</option>
                                        <option value="6-guests">06 Guests</option>
                                        <option value="9-guests">09 Guests</option>
                                        <option value="12-guests">12 Guests</option>
                                    </select>
                                </div>
                            </div>

                            <div className={reservationsFormStyle.partTwo}>
                                <div className={reservationsFormStyle.time}>
                                    <label htmlFor="time">Time</label>
                                    <select
                                        name="time"
                                        id="time"
                                        value={time}
                                        onChange={(e) => setTime(e.target.value)}
                                        required
                                    >
                                        {props.availableTimes.map(availableTime => (
                                            <option value={availableTime.value} key={availableTime.id}>
                                                {availableTime}
                                            </option>
                                        ))}
                                    </select>
                                </div>

                                <div className={reservationsFormStyle.occasion}>
                                    <label htmlFor="occasion">Occasion</label>
                                    <select
                                        name="occasion"
                                        id="occasion"
                                        value={occasion}
                                        onChange={(e) => setOccasion(e.target.value)}
                                        required
                                    >
                                        <option value="''">--</option>
                                        <option value="birthday">Birthday</option>
                                        <option value="engagement">Engagement</option>
                                        <option value="anniversary">Anniversary</option>
                                    </select>
                                </div>
                            </div>
                        </div>

                        <button type='submit'>Submit</button>

                        <div className={reservationsFormStyle.FooterLogoLine}></div>

                        <img src={reservationsFooterLogo} alt="logo" className={reservationsFormStyle.footerLogo} />
                    </div>
                </form>
            </div>

            <Footer />
        </div>
    )
}

export default ReservationsForm