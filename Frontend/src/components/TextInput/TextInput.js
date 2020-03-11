import React, { Component } from "react";

import "./style.css";

class TextInput extends Component {
  getText() {
    const texto = this.refs.texto.value;
    console.log(texto);
  }

  render() {
    return (
      <input
        className="TextInput"
        type="search"
        ref="texto"
        placeholder="Search all courses"
        onChange={this.getText.bind(this)}
      ></input>
    );
  }
}

export default TextInput;
