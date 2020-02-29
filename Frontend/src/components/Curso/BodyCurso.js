import React, { Component } from "react";


function Body({name, imgText}){
  return(
    <div className="body">
    <p className="title"> {name} </p>
    <p className="description"> {imgText} </p>
  </div>
  );
}

export default Body;
