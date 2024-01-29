import React from "react";

import { SubHeading, Services } from "../../components";
import { data, images } from "../../constants";
import "./SpecialServ.css";

const SpecialServ = () => (
  <div className="app__specialMenu flex__center section__padding" id="services">
    <div className="app__specialMenu-title">
      <SubHeading title="We have a great Treatment" />
      <h1 className="headtext__cormorant">250+ Conditions Treated</h1>
    </div>

    <div className="app__specialMenu-menu">
      <div className="app__specialMenu-menu_wine  flex__center">
        <p className="app__specialMenu-menu_heading">Services</p>
        <div className="app__specialMenu_menu_items">
          {data.service1.map((service1, index) => (
            <Services
              key={service1.title + index}
              title={service1.title}
              price={service1.price}
              condition_2={service1.Condition_2}
            />
          ))}
        </div>
      </div>

      <div className="app__specialMenu-menu_img">
        <img src={images.pain} alt="pain__img" />
      </div>

      <div className="app__specialMenu-menu_cocktails  flex__center">
        <p className="app__specialMenu-menu_heading">Services</p>
        <div className="app__specialMenu_menu_items">
          {data.service2.map((service2, index) => (
            <Services
              key={service2.title + index}
              title={service2.title}
              price={service2.price}
              condition_2={service2.Condition_2}
            />
          ))}
        </div>
      </div>
    </div>

    <div style={{ marginTop: 15 }}></div>
  </div>
);

export default SpecialServ;
