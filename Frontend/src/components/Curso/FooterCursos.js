import React, { Component } from "react";

class Footer extends Component {
  render() {
    const { price, rating } = this.props;
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
}

export default Footer;
