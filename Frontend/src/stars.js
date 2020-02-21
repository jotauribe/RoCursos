import React, { Component } from "react";
import "./style.css";

class Stars extends Component {
  render() {

    var estrellas = "";
    for (var i = 0; i < Math.round(this.props.stars); i++) {
      estrellas = estrellas + "★";
    }

    return (
      <div>
        <span className="stars">{estrellas}</span>
      </div>
    );
  }
}

export default Stars;
