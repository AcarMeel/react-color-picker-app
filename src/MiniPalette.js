import React from "react";
import { withStyles } from "@material-ui/styles";

const styles = {
  root: {
    backgroundColor: "white",
    border: "1px solid black",
    borderRadius: "5px",
    padding: "0.5rem",
    position: "relative",
    overflow: "hidden",
    "&:hover": {
      cursor: "pointer",
    },
  },
  colors: {
    backgroundColor: "#dae1e4",
    width: "100%",
    height: "150px",
    borderRadius: "5px",
    overflow: "hidden",
  },
  title: {
    position: "re;ative",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    margin: "0",
    color: "black",
    paddingTop: "0.5rem",
    fontSize: "1rem",
  },
  emoji: {
    marginLeft: "0.5rem",
    fontSize: "1.5rem",
  },
  miniColor: {
    position: "relative",
    display: "inline-block",
    width: "20%",
    height: "25%",
    margin: "0 auto",
    marginBottom: "-3.5px",
  },
};

const MiniPalette = ({ classes, paletteName, emoji, colors, handleClick }) => {
  const miniColorBoxes = colors.map((color) => (
    <div
      key={`${color.color}${color.name}`}
      className={classes.miniColor}
      style={{ backgroundColor: color.color }}
    ></div>
  ));
  return (
    <div className={classes.root} onClick={handleClick}>
      <div className={classes.colors}>{miniColorBoxes}</div>
      <h5 className={classes.title}>
        {paletteName} <span className={classes.emoji}>{emoji}</span>
      </h5>
    </div>
  );
};

export default withStyles(styles)(MiniPalette);
