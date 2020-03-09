import React from "react";

import "./style.css";

function Header({ img, credits }) {
  return (
    <div className="header">
      <img
        className="header__image"
        src={"https://www.mytablemesa.com" + img}
        alt=""
      />
      <p className="header__credits"> {credits + " CREDITS"} </p>
    </div>
  );
}

export default Header;
