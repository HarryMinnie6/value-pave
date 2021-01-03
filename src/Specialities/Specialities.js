import React from "react";
import "./Specialities.css";
import SpecialityCard from "./Speciality/SpecialityCard";
import ResidentialImage from "../images/patch-3299594_1920.jpg";
import CommercialImage from "../images/cobble-3430452_1920-1.jpg";
import IndustrialImage from "../images/quay-5248898_640.jpg";

function Specialities() {
  return (
    <div className='specialities'>
      <h1>We Specialise In</h1>
      <div className='specialities__types'>
        <SpecialityCard
          title='Residential Paving'
          description='Paving for driveways, patios, walkways, pool paving & more, with different variations and options to suit your needs.'
          image={ResidentialImage}
        />
        <SpecialityCard
          title='Commercial Paving'
          description='Paving for parks, forecourts, side walks & more.'
          image={CommercialImage}
        />
        <SpecialityCard
          title='Industrial Paving'
          description='High quality bricks & pavers that can withstand heavy machinery, trucks and high vehicle traffic.'
          image={IndustrialImage}
        />
      </div>
    </div>
  );
}

export default Specialities;
