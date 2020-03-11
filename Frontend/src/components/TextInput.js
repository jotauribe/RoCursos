import React, { Component } from "react";

class TextInput extends Component {
  getText() {
    const texto = this.refs.texto.value;
    console.log(texto)
  }

  render() {
    return (
      <input
        className="texto"
        type="search"
        ref="texto"
        placeholder="Search all courses"
        onChange={this.getText.bind(this)}
      ></input>
    );
  }
}

export default TextInput;
