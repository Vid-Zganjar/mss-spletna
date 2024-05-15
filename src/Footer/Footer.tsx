import React from "react";
import { SocialIcon } from 'react-social-icons';
import "./Footer.css";
import { NavLink } from "react-router-dom";

const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
};

const Footer = () => (
  
  <footer>
  <div className="footerContainer">
      <div className="socialIcons">
          <i><SocialIcon  network="tiktok" url="" /></i>
          <i><SocialIcon network="facebook" url="" /></i>
          <i><SocialIcon network="instagram" url="" /></i>
          <i><SocialIcon network="snapchat" url="" /></i>
      </div>
      
      <div className="footerNav">
      </div>
  </div>


 
  
  <div className="footerBottom">
      © 2024 Copyright: 
      <a className="text-white designer" href="https://zganjar.wordpress.com/">
        Balin Majster d.o.o.
      </a>
    </div>
  </footer>
);

export default Footer;
