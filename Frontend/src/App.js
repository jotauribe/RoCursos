import React, { Component } from "react";
import axios from "axios";

import "./style.css";
import Header from "./Component/HeaderCursos";
import Body from "./Component/BodyCursos";
import Footer from "./Component/FooterCursos";

class App extends Component {
  constructor() {
    super();
    this.state = {
      data: []
    };
  }

  async componentDidMount() {
    const respuesta = await axios.get("http://localhost:8282/");
    this.setState({ data: respuesta.data });
  }

  render() {
    return this.state.data.map((curso, i) => {
      return (
        <div key={i} className="container">
          <div className="container-data">
            <Header img={curso.imageUrl} credits={curso.maximumCredits} />
            <Body name={curso.name} imgText={curso.imageText} />
            <Footer price={curso.price} rating={curso.rating} />
          </div>
        </div>
      );
    });
  }
}

export default App;
