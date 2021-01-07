import React,{useState, useEffect} from "react";
import "./ContactBar.css";
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import PhoneIcon from '@material-ui/icons/Phone';
function ContactBar() {
  const [scroll, setScroll] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScroll(window.scrollY > 100);
    });
  }, []);
  return (
    <div className={scroll ? "contactBar contactBar2" : "contactBar "}>
      <div className='contact-details__wrapper'>
        <div className='email__wrapper'> <MailOutlineIcon className='icons' /> : email@gmail.com</div>
        <div className='phone__wrapper'> <PhoneIcon className='icons' /> : 123 456 789</div>
      </div>
    </div>
  );
}

export default ContactBar;
