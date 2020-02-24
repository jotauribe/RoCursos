import React, { Component } from "react";
import axios from "axios";

import Curso from "./components/Curso";
import Texto from "./components/InputText";
import './components/Curso/style.css'
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
    return (
      <div className="contenedorTextClase">
        <div>
          <Texto></Texto>
        </div>

        <div className="divClase">
          {this.state.data.map((curso, i) => (
            <Curso curso={curso} key={i}></Curso>
          ))}
        </div>
      </div>
    );
  }
}

export default App;

