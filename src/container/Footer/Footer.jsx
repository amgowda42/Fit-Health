import React from "react";
import { FiFacebook, FiTwitter, FiInstagram } from "react-icons/fi";

import { FooterOverlay } from "../../components";
import { images } from "../../constants";
import "./Footer.css";

const Footer = () => (
  <div className="app__footer section__padding" id="about">
    <FooterOverlay />

    <div className="app__footer-links">
      <div className="app__footer-links_contact" id="contact">
        <h1 className="app__footer-headtext">Contact Us</h1>
        <p className="p__opensans">1800 208 6585</p>
        <p className="p__opensans">1800 209 6585</p>
        <p className="p__opensans">91 + 7689654789</p>
      </div>

      <div className="app__footer-links_logo">
        <img src={images.gericht} alt="footer_logo" />
        <p className="p__opensans">
          &quot;The best way to find yourself is the best treatment & the
          service .&quot;
        </p>
        <img
          src={images.medisymb}
          alt="footer_logo"
          className="medisymb__img"
          style={{ marginTop: 15 }}
        />
        <div className="app__footer-links_icons">
          <FiFacebook />
          <FiTwitter />
          <FiInstagram />
        </div>
      </div>

      <div className="app__footer-links_work">
        <h1 className="app__footer-headtext">Working Hours</h1>
        <p className="p__opensans">Monday-Friday:</p>
        <p className="p__opensans">08:00 am - 09:00 pm</p>
        <p className="p__opensans">Saturday-Sunday:</p>
        <p className="p__opensans">07:00 am - 03:00 pm</p>
      </div>
    </div>

    <div className="footer__copyright">
      <p className="p__opensans">2024 FitHealth. All Rights reserved.</p>
    </div>
  </div>
);

export default Footer;
