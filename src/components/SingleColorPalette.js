import React, { Component } from "react";
import { Link } from "react-router-dom";
import { withStyles } from "@material-ui/styles";
import ColorBox from "./ColorBox";
import Navbar from "./Navbar";
import PaletteFooter from "./PaletteFooter";
import styles from '../styles/PaletteStyles';

class SingleColorPalette extends Component {
  constructor(props) {
    super(props);
    const { palette, colorId: colorToFilterBy } = this.props;
    this._shades = this.gatherShades(palette, colorToFilterBy);

    this.state = {
      format: "hex",
    };
    this.changeFormat = this.changeFormat.bind(this);
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
    const { palette, classes } = this.props;
    const { format } = this.state;
    const colorBoxes = this._shades.map((color, index) => (
      <ColorBox
        key={`${color.id}-${index}`}
        name={color.name}
        background={color[format]}
        id={color.id}
        paletteId={palette.id}
        showingFullPalette={false}
      />
    ));
    return (
      <div className={classes.Palette}>
        <Navbar changeFormat={this.changeFormat} showingAllColors={false} />
        <div className={classes.PaletteColors}>
          {colorBoxes}
          <div className={classes.goBack}>
            <Link className="" to={`/palette/${palette.id}`}>Go Back</Link>
          </div>
        </div>
        <PaletteFooter
          paletteName={palette.paletteName}
          emoji={palette.emoji}
        />
      </div>
    );
  }
}

export default withStyles(styles)(SingleColorPalette);