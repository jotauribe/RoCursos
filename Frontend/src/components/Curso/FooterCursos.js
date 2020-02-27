import React, { Component } from "react";

function Footer({ price, rating }) {
  let estrellas = "";

  for (var i = 0; i < Math.round(rating); i++) {
    estrellas += "★";
  }

  return (
    <div className="footer">
      <p className="price"> {"$" + price} </p>
      <span className="stars">{estrellas}</span>
    </div>
  );
}

export default Footer;
