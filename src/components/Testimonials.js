import React from 'react'
import testimonialsStyle from './components.module.css/Testimonials.module.css'
import ratingStar from '../images/testimonials/star.png'
import personOne from '../images/testimonials/person-one.png'
import personTwo from '../images/testimonials/person-two.png'
import personThree from '../images/testimonials/person-three.png'
import personFour from '../images/testimonials/person-four.png'

const Testimonials = () => {
    const people = [
        {
            id: 1,
            rating: ratingStar,
            name: 'Bill Morrow',
            photo: personOne,
            review: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit.Perferendis, illo!',
        },
        {
            id: 2,
            rating: ratingStar,
            name: 'Micah Barber',
            photo: personTwo,
            review: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquam, facere.',
        },
        {
            id: 3,
            rating: ratingStar,
            name: 'Tommie Schmidt',
            photo: personThree,
            review: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eligendi, culpa!',
        },
        {
            id: 4,
            rating: ratingStar,
            name: 'Ivy Kramer',
            photo: personFour,
            review: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ut, in?',
        },
    ]

    return (
        <div className={testimonialsStyle.testimonials}>
            <h2>Testimonials</h2>

            <div className={testimonialsStyle.card}>
                <ul>
                    {
                        people.map(person => (
                            <li key={person.id}>
                                <div className={testimonialsStyle.partOne}>
                                    <img src={person.rating} alt="rating" className={testimonialsStyle.rating} />
                                    <img src={person.rating} alt="rating" className={testimonialsStyle.rating} />
                                    <img src={person.rating} alt="rating" className={testimonialsStyle.rating} />
                                    <img src={person.rating} alt="rating" className={testimonialsStyle.rating} />
                                    <img src={person.rating} alt="rating" className={testimonialsStyle.rating} />
                                </div>

                                <div className={testimonialsStyle.partTwo}>
                                    <img src={person.photo} alt="photo" className={testimonialsStyle.photo} />

                                    <h4 className={testimonialsStyle.name}>{person.name}</h4>
                                </div>

                                <p className={testimonialsStyle.review}>{person.review}</p>
                            </li>
                        ))
                    }
                </ul>
            </div>
        </div>
    )
}

export default Testimonials