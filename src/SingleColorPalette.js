import React, { Component } from "react";
import ColorBox from "./ColorBox";
import Navbar from "./Navbar";
import PaletteFooter from "./PaletteFooter";

export default class SingleColorPalette extends Component {
  constructor(props) {
    super(props);
    const { palette, colorId: colorToFilterBy } = this.props;
    this._shades = this.gatherShades(palette, colorToFilterBy);

    this.state = {
      format: "hex",
    };
    this.changeFormat = this.changeFormat.bind(this);
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

  changeFormat(format) {
    this.setState({ format });
  }

  render() {
    const { palette } = this.props;
    const { format } = this.state;
    const colorBoxes = this._shades.map((color, index) => (
      <ColorBox
        key={`${color.id}-${index}`}
        name={color.name}
        background={color[format]}
        id={color.id}
        paletteId={palette.id}
        showLink={false}
      />
    ));
    return (
      <div className="Palette">
        <Navbar changeFormat={this.changeFormat} showingAllColors={false} />
        <div className="Palette-colors">{colorBoxes}</div>
        <PaletteFooter paletteName={palette.paletteName} emoji={palette.emoji} />
      </div>
    );
  }
}