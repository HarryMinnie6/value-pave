import React, {Fragment} from "react";
import "./About.css";
import {motion} from 'framer-motion'


function About() {
  return (
    
    <motion.div
      initial={{ opacity: 0 }}
      exit={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className='about'
    >
      <h1>About Us</h1>
      <div className='aboutDetails__holder'>
        <p className='aboutDetails__paragraph'>
          Value Pave has been a pioneer in the industry for well over 10 years,
          Value Pave has grown to become Port Elizabeths premier installer of
          brick pavers in the commercial, residential and industrial markets.
          Value Pave is owned and run by Evan Jones who founded the company in
          2005 in South Africa. Since the early 2000's, Value Pave has proudly
          provided homeowners and property developments with exceptional patio
          paving, pool surrounds paving, driveway paving, walkway paving, and as
          well as carpark and building exterior paving. Value Pave is based in
          Port Elizabeth, and provides services to all areas of Port elizabeth
          and Surrounding areas.
        </p>
        <div className='aboutDetails__reasons'>
          <h3>Why Choose Us?</h3>
          <p>
            ~ We are a well established company with of 10 years of experience.
          </p>

          <p>
            ~ We don't compromise on service, quality or customer satisfaction.
          </p>
          <p>
            ~Our staff is highly qualified and experienced who are up to date
            with the latest developments on new products and designs.
          </p>
          <p>
            The Materials w euse are of the highest standards that measure up to
            durability, reliability, aesthetics appeal and affordability.
          </p>
          <p>
            All our projects are fully guaranteed against faulty workmanship and
            materials supplied.
          </p>
          <p>
            Where possible, Value Pave uses only products that carry the South
            African Bureau of Standards (SABS) stamp of approval and that are
            locally produced.
          </p>
        </div>
      </div>
     
    </motion.div>
   
  );
}

export default About;
