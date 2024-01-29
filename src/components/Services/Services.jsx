import React from "react";

import "./Services.css";

const Services = ({ title, price, condition_2 }) => (
  <div className="app__menuitem" id="ser">
    <div className="app__menuitem-head">
      <div className="app__menuitem-name">
        <p className="p__cormorant" style={{ color: "#DCCA87" }}>
          {title}
        </p>
      </div>
      <div className="app__menuitem-dash" />
      <div className="app__menuitem-price">
        <p className="p__cormorant">{price}</p>
      </div>
    </div>

    <div className="app__menuitem-sub">
      <p className="p__opensans" style={{ color: "#AAAAAA" }}>
        {condition_2}
      </p>
    </div>
  </div>
);

export default Services;
