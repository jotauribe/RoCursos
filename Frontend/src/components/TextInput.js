import React, { Component } from "react";

class TextInput extends React.Component {
  getText() {
    const texto = this.refs.texto.value;
  }

  render() {
    const { data } = this.props;
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
