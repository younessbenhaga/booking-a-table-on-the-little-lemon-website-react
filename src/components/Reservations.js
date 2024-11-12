import React from 'react'
import ReservationsForm from './ReservationsForm'

const Reservations = (props) => {
    return (
        <div>
            <ReservationsForm
                availableTimes={props.availableTimes}
                dispatch={props.dispatch}
                submitForm={props.submitForm}
            />
        </div>
    )
}

export default Reservations