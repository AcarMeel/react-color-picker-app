import React, { Component } from "react";
import ColorBox from "./ColorBox";
import Navbar from "./Navbar";
import "./Palette.css";

export default class Palette extends Component {
  constructor(props) {
    super(props);
    this.state = {
      level: 500,
    };
    this.changeLevel = this.changeLevel.bind(this);
  }

  changeLevel(level) {
    this.setState({ level });
  }
  render() {
    const { level } = this.state;
    const { palette } = this.props;
    const colorBoxes = palette.colors[level].map(({ id, hex, name }) => (
      <ColorBox key={id} background={hex} name={name} />
    ));
    return (
      <div className="Palette">
        <Navbar level={level} changeLevel={this.changeLevel} />
        <div className="Palette-colors">{colorBoxes}</div>
        {/* footer */}
      </div>
    );
  }
}
