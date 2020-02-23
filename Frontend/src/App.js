import React, { Component } from "react";
import axios from "axios";

import Curso from "./components/Curso";
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
    return this.state.data.map((curso, i) => <Curso curso={curso} key={i}></Curso>);
  }
}

export default App;
