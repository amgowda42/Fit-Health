import React from "react";

import { SubHeading } from "../../components";
import { images } from "../../constants";
import "./Header.css";
import Form from "../../components/Form/Form";

const Header = () => (
  <div className="app__header app__wrapper section__padding" id="home">
    <div className="app__wrapper_info">
      <SubHeading title="Fixhealth for Goodhealth" />
      <h1 className="app__header-h1">Please Book You Doctors </h1>
      <Form />
      <br />
      <br />
      <button type="button" className="custom__button">
        <a href="#ser">Explore Services</a>
      </button>
    </div>

    <div className="app__wrapper_img">
      <img src={images.welcome} alt="header_img" />
    </div>
  </div>
);

export default Header;
