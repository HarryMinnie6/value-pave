import React ,{ Fragment}from 'react'
import ContactBar from '../ContactBar/ContactBar'
import {motion} from 'framer-motion'

import './Home.css'

function Home() {
    return (
        <Fragment>
        <motion.div  initial={{ opacity: 0 }}
        exit={{ opacity: 0 }}
        animate={{ opacity: 1 }} className='home'>
        <ContactBar/>
       <div className='home__header'>
       <h2>Paving Contractor Port Elizabeth</h2>
       <h3>Quality and service for 20+ years</h3></div>
            
        </motion.div>
        
        
        </Fragment>
        
    )
}

export default Home
