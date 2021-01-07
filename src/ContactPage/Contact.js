import React from "react";
import "./Contact.css";
import MailOutlineIcon from "@material-ui/icons/MailOutline";
import PhoneIcon from "@material-ui/icons/Phone";

function Contact() {
  return (
    <div className='contact'>
      <h1>Contact Us</h1>
      <div className='contactDetails__holder'>
        <div className='contactDetails__wrapper'>
        <h2>For any inquiries please contact us</h2>
          <div className='contact__details'>
          
            <div className='contact__phone'>
              <PhoneIcon className='contact__icons' />
              <h3>Give us a call</h3>
              <p>(+27) 123456789 </p>
            </div>
            <div className='contact__email'>
              <MailOutlineIcon className='contact__icons' />
              <h3>Send us an email</h3>
              <p>email@email.com </p>
            </div>
          </div>

          <div className='contact__map'>
            <div className='contact__address'>
              <h3>Address info</h3>
              <p>1233 road, Port Elizabeth, 8000</p>
            </div>
            <iframe
            className='map-display'
              width='100%'
              height='350'
              frameborder='0'
              scrolling='no'
              marginheight='0'
              marginwidth='0'
              id='gmap_canvas'
              src='https://maps.google.com/maps?width=520&amp;height=350&amp;hl=en&amp;q=3%20Hoogenhout%20street,%20Kleinbron,Estate,%20Brackenfell%20Western%20Cape+(Value%20Pave)&amp;t=&amp;z=13&amp;ie=UTF8&amp;iwloc=B&amp;output=embed'
            ></iframe>
            <a className='maps_link' href='http://maps-generator.com/'>
              google maps add to website
            </a>
            <script
              type='text/javascript'
              src='https://embedmaps.com/google-maps-authorization/script.js?id=45f1907b7fb67cd09525edb4449d063375a1a20e'
            ></script>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
