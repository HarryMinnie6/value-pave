import React from "react";
import { Link } from "react-router-dom";
import "./AboutSection.css";

function AboutSection() {
  return (
    <div className='aboutSection'>
      <h1>About us</h1>
      <div className='aboutSection__holder'>
        <p className='aboutSection__paragraph'>
          Value Pave has been a pioneer in the industry for well over 10 years,
          Value Pave has grown to become Port Elizabeths premier installer of
          brick pavers in the commercial, residential and industrial markets.
          Value Pave is owned and run by Evan Jones who founded the company in
          1978 in South Africa. Since the early 2000's, Value Pave has proudly
          provided homeowners and property developments with exceptional patio
          paving, pool surrounds paving, driveway paving, walkway paving, and as
          well as carpark and building exterior paving. Value Pave is based in
          Port Elizabeth, and provides services to all areas of Port elizabeth
          and Surrounding areas.
        </p>
        <p className='aboutSection__quote'>
          "Quality is not an act, it is a habit" - <i>Aristotle</i>
        </p>
        <Link className='aboutSection__button' to='/contact'>
          Contact Us!
        </Link>
      </div>
    </div>
  );
}

export default AboutSection;
