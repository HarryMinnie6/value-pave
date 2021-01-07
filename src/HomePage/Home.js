import React ,{ Fragment}from 'react'
import ContactBar from '../ContactBar/ContactBar'

import './Home.css'

function Home() {
    return (
        <Fragment>
        <div className='home'>
        <ContactBar/>
       <div className='home__header'>
       <h2>Paving Contractor Port Elizabeth</h2>
       <h3>Quality and service for 20+ years</h3></div>
            
        </div>
        
        
        </Fragment>
        
    )
}

export default Home
