import React from "react";
import "./Services.css";
import { motion } from "framer-motion";

import ResidentialImage from "../images/patch-3299594_1920.jpg";
import CommercialImage from "../images/cobble-3430452_1920-1.jpg";
import IndustrialImage from "../images/quay-5248898_640.jpg";

function Services() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      exit={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className='services__page'
      id='services'
    >
      <h1> Services </h1>

      <div className='services-details__holder'>
        <div className='services-details__description'>
          <div className='services-details__paragraph'>
            <h3>Residential Paving</h3>
            <p>
              We design driveways and front entrances that are functional,
              solidly designed,beautiful and properly installed that will
              contribute to the Rand value of your property. We offer you a
              range of pavers in clay, cement and simulated stone, from various
              reputable manufacturers in South Africa.
            </p>
            {/*<a href='#'>Learn More</a> */}
          </div>
          <div className='services-details__img-holder'>
            <img
              className='services-image'
              src={ResidentialImage}
              alt='smart home image'
            />
          </div>
        </div>
      </div>
      {/*----------------------------------------------------------  */}
      <div className='services-details__holder2'>
        <div className='services-details__description2'>
          <div className='services-details__img-holder2'>
            <img
              className='services-image'
              src={ResidentialImage}
              alt='connected-building image'
            />
          </div>
          <div className='services-details__paragraph2'>
            <h3>Commercial Paving</h3>
            <p>
              Commercial paving includes paving of all public areas that
              includes parks, side walks, holiday resorts, inner city
              forecourts, neighbourhoods and any area which supports a bigger
              than normal amount of traffic and people. Paving these areas
              assists greatly in the upkeep and maintenance of public areas and
              due to the nature and quality of our pavers lasts for a very long
              time.
            </p>
            {/*<a href='#'>Learn More</a> */}
          </div>
        </div>
      </div>
      {/* --------------------------------------------------------- */}
      <div className='services-details__holder'>
        <div className='services-details__description'>
          <div className='services-details__paragraph'>
            <h3>Industrial Paving</h3>
            <p>
              Industrial paving is used in areas where the traffic volume is
              very high and that has to withstand heavy machinery, trucks and
              high vehicle traffic. We use high quality bricks and pavers that
              is robust and durable with a weight-bearing capacity of over 20
              tonnes. You would see industrial paving in areas like and large
              parking areas,residential estate entrances, intersections, loading
              dock and filling stations.
            </p>
            {/*<a href='#'>Learn More</a> */}
          </div>
          <div className='services-details__img-holder'>
            <img
              className='services-image'
              src={ResidentialImage}
              alt='security image'
            />
          </div>
        </div>
      </div>
      {/*----------------------------------------------------------  */}
      <div className='services-details__holder2'>
        <div className='services-details__description2'>
          <div className='services-details__img-holder2'>
            <img
              className='services-image'
              src={ResidentialImage}
              alt='connected-building image'
            />
          </div>
          <div className='services-details__paragraph2'>
            <h3>Paving Repairs</h3>
            <p>
              Value pave is dedicated to assisting you in maintaining the
              appearance and condition of your paving. We specialise in the
              repair, maintenance and cleaning of paving patios, paver pool
              decks, driveways, sidewalks and more.
            </p>
            <p className='services-details__paragraph2-p'>
              <b>Our paving repair services include:</b>
            </p>
            <ul className='services-details__paragraph2-ul'>
              <li className='services-details__paragraph2-li'>
                Replacing cracked and loosened pavers
              </li>
              <li className='services-details__paragraph2-li'>
                Drainage problems on paved areas.
              </li>
              <li className='services-details__paragraph2-li'>
                Lifting and repairing low and sunken spots on paved areas.
              </li>
              <li className='services-details__paragraph2-li'>
                Fixing paved areas where pavers have shifted causing gaps and
                uneven edges.
              </li>
              <li className='services-details__paragraph2-li'>
                Replacing broken paver edge restraints.
              </li>
              <li className='services-details__paragraph2-li'>
                Any type of paving repairs not listed above is done by Value
                Pave.
              </li>
            </ul>

            {/*<a href='#'>Learn More</a> */}
          </div>
        </div>
      </div>

      {/* --------------------------------------------------------- */}
    </motion.div>
  );
}

export default Services;
