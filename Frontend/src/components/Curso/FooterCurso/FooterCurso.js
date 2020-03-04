import React from "react";

import Estrellas from "./Stars/Stars";
import "./style.css";

function Footer({ price, rating }) {
  return (
    <div className="footer">
      <span className="footer__price"> {"$" + price} </span>
      <Estrellas rating={rating} className="footer_stars"></Estrellas>
    </div>
  );
}

export default Footer;
