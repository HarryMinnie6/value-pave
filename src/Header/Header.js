import React,{Fragment, useState, useEffect} from "react";
import "./Header.css";
import { Link } from "react-router-dom";

function Header() {
      // for navbar to change color on scroll
  const [scroll, setScroll] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScroll(window.scrollY > 100);
    });
  }, []);
  return (
    <Fragment>
      <input type="checkbox" id="check" />
      <label htmlFor="check">
        <div id="btn">
          <div className="bar-holder">
            <div></div>
            <div></div>
            <div></div>
          </div>
        </div>
      </label>
      <label htmlFor="check">
        <div className="close-bar" id="cancel">
          <div></div>
          <div></div>
          <div></div>
        </div>
      </label>
      
      <nav className="sidebar ">
      <Link className='header-link'><h1>Value Pave</h1></Link>
      
     
        <ul>
          <li className="active">
            <Link
              className="link"
              to="/"
              activeClass="active"
              spy={true}
              smooth={true}
              offset={0}
              duration={500}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              className="link"
              to="services"
              activeClass="active"
              spy={true}
              smooth={true}
              offset={0}
              duration={500}
            >
              Services
            </Link>
          </li>
          <li>
            <Link
              className="link"
              to="about"
              activeClass="active"
              spy={true}
              smooth={true}
              offset={0}
              duration={500}
            >
              About
            </Link>
          </li>
          <li>
            <Link
              className="link"
              to="contact"
              activeClass="active"
              spy={true}
              smooth={true}
              offset={0}
              duration={500}
            >
              Contact
            </Link>
          </li>
        </ul>
       {/*  <div className="social-media__wrapper">
        <i className="fab fa-instagram"></i>
        <i className="fab fa-linkedin-in"></i>
      </div> */}
      </nav>
    </Fragment>
  );
}

export default Header;
