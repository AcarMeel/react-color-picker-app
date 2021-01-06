import React, { Component } from "react";
import ColorBox from "./ColorBox";

export default class SingleColorPalette extends Component {
  constructor(props) {
    super(props);
    const { palette, colorId: colorToFilterBy } = this.props;
    this._shades = this.gatherShades(palette, colorToFilterBy);
    console.log(this._shades);
  }

  gatherShades(palette, colorToFilterBy) {
    let shades = [];
    let allColors = { ...palette.colors };
    for (const key in allColors) {
      shades = shades.concat(
        allColors[key].filter((color) => color.id === colorToFilterBy)
      );
    }
    return shades.slice(1);
  }

  render() {
    const { palette } = this.props;
    const colorBoxes = this._shades.map((color, index) => (
      <ColorBox
        key={`${color.id}-${index}`}
        name={color.name}
        background={color.hex}
        id={color.id}
        paletteId={palette.id}
        showLink={false}
      />
    ));
    return (
      <div className="Palette">
        <h1>Single Color Palette</h1>
        <div className="Palette-colors">{colorBoxes}</div>
      </div>
    );
  }
}
