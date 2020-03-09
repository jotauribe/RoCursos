import React from "react";

import Stars from "./Stars/Stars";
import "./style.css";

function Footer({ price, rating }) {
  return (
    <div className="footer">
      <span className="footer__price"> {"$" + price} </span>
      <Stars rating={rating} className="footer_stars"></Stars>
    </div>
  );
}

export default Footer;
