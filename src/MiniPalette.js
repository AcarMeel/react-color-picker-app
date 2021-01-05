import React from "react";
import { withStyles } from "@material-ui/styles";

const styles = {
  root: {
    backgroundColor: "white",
    border: "1px solid black",
    borderRadius: "5px",
    position: "relative",
    overflow: "hidden",
    "&:hover": {
      cursor: "pointer",
    },
  },
  colors: {
    backgroundColor: "grey",
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
      marginLeft: '0.5rem',
      fontSize: '1.5rem'
  },
};

const MiniPalette = ({ classes, paletteName, emoji }) => {
  return (
    <>
      <div className={classes.root}>
        <div className={classes.colors}></div>
        <h5 className={classes.title}>
          {paletteName} <span className={classes.emoji}>{emoji}</span>
        </h5>
      </div>
    </>
  );
};

export default withStyles(styles)(MiniPalette);
