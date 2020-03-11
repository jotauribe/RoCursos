import React from "react";

import Header from "./HeaderCurso";
import Body from "./BodyCurso";
import Footer from "./FooterCurso";
import "./style.css";

function Curso({ curso }) {
  return (
    <div className="curso">
      <Header img={curso.imageUrl} credits={curso.maximumCredits} />
      <Body name={curso.name} imgText={curso.imageText} />
      <Footer
        className="curso__footer"
        price={curso.price}
        rating={curso.rating}
      />
    </div>
  );
}

export default Curso;
