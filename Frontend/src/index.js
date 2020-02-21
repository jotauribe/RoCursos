import React, { Component } from "react";
import axios from "axios";

import "./style.css";

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
          <div>
            <div className="container-data">
              <div className="header">
                <img
                  src={"https://www.mytablemesa.com" + curso.imageUrl}
                  className="img"
                />
                <p> {curso.maximumCredits + " CREDITS"} </p>
              </div>
              <div className="body">
                <p className="title"> {curso.name} </p>
                <p className="description"> {curso.imageText} </p>
              </div>
              <div className="footer">
                <p className="price"> {"$" + curso.price} </p>
                <p> {curso.rating} </p>
              </div>
            </div>
          </div>
        </div>
      );
    });
  }
}

export default App;