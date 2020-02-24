import React, { Component } from "react";

class Texto extends React.Component {
  getText() {
    const texto = this.refs.texto.value;
    console.log(texto);
  }

  render() {
    return (
      <form>
        <input
          className="texto"
          type="search"
          ref="texto"
          placeholder="Search all courses"
          onChange={this.getText.bind(this)}
        >
        </input>
      </form>
    );
  }
}

export default Texto;
