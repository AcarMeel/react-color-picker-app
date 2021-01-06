import React from "react";
import { withStyles } from "@material-ui/styles";
import styles from "../styles/DraggableColorBoxStyles";

const DraggableColorBox = ({ color, name, classes }) => {
  return (
    <div className={classes.root} style={{ backgroundColor: color }}>
      <div className={classes.boxContent}>
        <span> {name}</span>
      </div>
    </div>
  );
};

export default withStyles(styles)(DraggableColorBox);