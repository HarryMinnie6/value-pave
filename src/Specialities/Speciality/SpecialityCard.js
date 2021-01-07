import React from 'react'
import './SpecialityCard.css'

function SpecialityCard({title, description, image}) {
    return (
        <div className='speciality'>
        <h1>{title}</h1>
        <img className='speciality-image' src={image} alt='brick-img' />

         <p>{description}</p>
        </div>
    )
}

export default SpecialityCard
