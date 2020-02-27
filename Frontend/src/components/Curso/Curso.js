import React, { Component } from "react";

import Header from "./HeaderCursos";
import Body from "./BodyCursos";
import Footer from "./FooterCursos";
import "./style.css";

function Curso({ curso }) {
  return (
    <div className="container-data">
      <Header img={curso.imageUrl} credits={curso.maximumCredits} />
      <Body name={curso.name} imgText={curso.imageText} />
      <Footer price={curso.price} rating={curso.rating} />
    </div>
  );
}

export default Curso;
