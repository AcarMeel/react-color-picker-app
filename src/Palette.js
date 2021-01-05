import React, { Component } from "react";
import ColorBox from "./ColorBox";
import Navbar from "./Navbar";
import "./Palette.css";

export default class Palette extends Component {
  constructor(props) {
    super(props);
    this.state = {
      level: 500,
      format: 'hex'
    };
    this.changeLevel = this.changeLevel.bind(this);
    this.changeFormat = this.changeFormat.bind(this);
  }

  changeLevel(level) {
    this.setState({ level });
  }

  changeFormat(format) {
    this.setState({ format });
  } 

  render() {
    const { level, format } = this.state;
    const { colors, paletteName, emoji } = this.props.palette;
    const colorBoxes = colors[level].map((color, { id, hex, name }) => (
      <ColorBox key={id} background={color[format]} name={name} />
    ));
    return (
      <div className="Palette">
        <Navbar level={level} changeLevel={this.changeLevel} changeFormat={this.changeFormat}/>
        <div className="Palette-colors">{colorBoxes}</div>
        <footer className="Palette-footer">
          { paletteName }
          <span className="emoji">{emoji}</span>
        </footer>
      </div>
    );
  }
}
