import React from 'react'
import './SpecialityCard.css'

function SpecialityCard({title, description, image}) {
    return (
        <div className='speciality'>
          <div className='speciality-inner'>
            <div className='speciality-front'>
              <img className='speciality-image' src={image} alt='image' />
              <h1>{title}</h1>
            </div>
            <div className='speciality-back'>
              <h1>{title}</h1>
              <p>{description}</p>
            </div>
          </div>
        </div>
    )
}

export default SpecialityCard
