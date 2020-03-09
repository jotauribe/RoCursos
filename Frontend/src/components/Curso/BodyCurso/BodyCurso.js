import React from "react";
import "./style.css";

function Body({ name, imgText }) {
  return (
    <div className="body">
      <p className="body__title"> {name} </p>
      <p className="body__description"> {imgText} </p>
    </div>
  );
}

export default Body;
