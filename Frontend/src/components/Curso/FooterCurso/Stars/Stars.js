import React from "react";

import "./style.css";

function Stars({ rating }) {
  let estrellas = "";

  for (var i = 0; i < Math.round(rating); i++) {
    estrellas += "★";
  }

  return <span className="stars">{estrellas}</span>;
}

export default Stars;
