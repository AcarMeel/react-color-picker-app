import React, { Component } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { Link } from "react-router-dom";
import chroma from "chroma-js";
import { withStyles } from "@material-ui/styles";
import "./ColorBox.css";

const styles = {
  ColorBox: {
    width: "20%",
    height: ({ showingFullPalette }) => (showingFullPalette ? "25%" : "50%"),
    margin: "0 auto",
    display: "inline-block",
    position: "relative",
    cursor: "pointer",
    marginBottom: "-3.5px",
    "&:hover button": {
      opacity: 1,
      transition: "all 0.5s ease-in-out",
    },
  },
  boxContent: {
    position: "absolute",
    padding: "10px",
    width: "100%",
    left: 0,
    bottom: 0,
    color: "black",
    letterSpacing: "1px",
    textTransform: "uppercase",
    fontSize: "12px",
  },
  copyOverlay: {
    opacity: 0,
    zIndex: 0,
    width: "100%",
    height: "100%",
    transform: "scale(0.1)",
  },
  showOverlay: {
    position: 'absolute',
    opacity: 1,
    transform: 'scale(50)',
    zIndex: 10,
    transition: 'transform 0.5s ease-in-out'
  },
  copyMsg: {
    position: 'fixed',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    fontSize: '4rem',
    transform: 'scale(0.1)',
    opacity: 0,
    color: 'white',
    textTransform: 'uppercase',
    '& h1': {
      fontWight: 400,
      textShadow: '1px 2px black',
      background: 'rgba(255, 255, 255, 0.2)',
      width: '100%',
      textAlign: 'center',
      marginBottom: 0,
      padding: '1rem',
    },
    '& p': {
      fontSize: '2rem',
      fontWeight: 100,
    }
  },
  showCopyMsg: {
    opacity: 1,
    transform: 'scale(1)',
    zIndex: 25,
    transition: 'all 0.4s ease-in-out',
    transitionDelay: '0.3s',
  },
  copyText: {
    color: ({ background }) =>
      chroma(background).luminance() >= 0.07 ? "black" : "white",
  },
  colorName: {
    color: ({ background }) =>
      chroma(background).luminance() <= 0.08 ? "white" : "black",
  },
  seeMore: {
    background: "rgba(255, 255, 255, 0.3)",
    position: "absolute",
    right: "0",
    bottom: "0",
    border: "none",
    color: ({ background }) =>
      chroma(background).luminance() >= 0.7 ? "black" : "white",
    width: "60px",
    height: "30px",
    textAlign: "center",
    lineHeight: "30px",
    textTransform: "uppercase",
  },
  copyButton: {
    display: "inline-block",
    position: "absolute",
    top: "50%",
    left: "50%",
    width: "100px",
    height: "30px",
    marginLeft: "-50px",
    marginTop: "-15px",
    textAlign: "center",
    outline: "none",
    background: "rgba(255, 255, 255, 0.3)",
    fontSize: "1rem",
    lineHeight: "30px",
    color: ({ background }) =>
      chroma(background).luminance() >= 0.7 ? "black" : "white",
    textTransform: "uppercase",
    border: "none",
    textDecoration: "none",
    opacity: 0,
  },
};

class ColorBox extends Component {
  constructor(props) {
    super(props);
    this.state = { copied: false };
    this.changeCopyState = this.changeCopyState.bind(this);
  }

  // Use arrow fn to avoid bind(this)
  changeCopyState() {
    this.setState({ copied: true }, () => {
      setTimeout(() => this.setState({ copied: false }), 1500);
    });
  }

  render() {
    const {
      background,
      name,
      id,
      paletteId,
      showingFullPalette,
      classes,
    } = this.props;
    const { copied } = this.state;
    return (
      <CopyToClipboard text={background} onCopy={this.changeCopyState}>
        <div style={{ background }} className={classes.ColorBox}>
          <div
            style={{ background }}
            className={`${classes.copyOverlay} ${copied && classes.showOverlay}`}
          ></div>
          <div className={`${classes.copyMsg} ${copied && classes.showCopyMsg}`}>
            <h1>Copied!</h1>
            <p className={classes.copyText}>{background}</p>
          </div>
          <div className="copy-container">
            <div className={classes.boxContent}>
              <span className={classes.colorName}>{name}</span>
            </div>
            <button className={classes.copyButton}>Copy</button>
          </div>
          {showingFullPalette && (
            <Link
              to={`/palette/${paletteId}/${id}`}
              onClick={(e) => e.stopPropagation()}
            >
              <span className={classes.seeMore}>More</span>
            </Link>
          )}
        </div>
      </CopyToClipboard>
    );
  }
}

export default withStyles(styles)(ColorBox);