import React, { Component } from "react";

class Header extends Component {
  render() {
    const { img, credits } = this.props;
    return (
      <div className="header">
        <img src={"https://www.mytablemesa.com" + img} className="img" />
        <p> {credits + " CREDITS"} </p>
      </div>
    );
  }
}

export default Header;
