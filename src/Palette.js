import React, { Component } from "react";
import ColorBox from "./ColorBox";

import Slider from "rc-slider";
import "rc-slider/assets/index.css";

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
        {/* navbar */}
        <div className="slider">
          <Slider
            defaultValue={level}
            min={100}
            max={900}
            step={100}
            onAfterChange={this.changeLevel}
          />
        </div>
        <div className="Palette-colors">{colorBoxes}</div>
        {/* footer */}
      </div>
    );
  }
}
