import React, { Component } from "react";

class Body extends Component {
  render() {
    const { name, imgText } = this.props;
    return (
        <div className="body">
        <p className="title"> {name} </p>
        <p className="description"> {imgText} </p>
      </div>
    );
  }
}

export default Body;
