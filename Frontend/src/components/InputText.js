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
          type="text"
          ref="texto"
          placeholder="Escribe aqui..."
          onChange={this.getText.bind(this)}
        />
      </form>
    );
  }
}

export default Texto;
