import React, { Component } from "react";
import Slider from "rc-slider";
import MenuItem from "@material-ui/core/MenuItem";
import Select from "@material-ui/core/Select";
import Snackbar from "@material-ui/core/Snackbar";
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from "@material-ui/icons/Close";
import "rc-slider/assets/index.css";
import "./Navbar.css";
import { Icon } from "@material-ui/core";

export default class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      format: "hex",
      open: false
    };
    this.handleFormatChange = this.handleFormatChange.bind(this);
    this.closeSnackbar = this.closeSnackbar.bind(this);
  }

  handleFormatChange(e) {
    this.setState(
      {
        format: e.target.value,
        open: true
      },
      () => this.props.changeFormat(this.state.format)
    );
  }

  closeSnackbar() {
      this.setState({ open: false });
  }

  render() {
    const { level, changeLevel, changeFormat } = this.props;
    const { format, open } = this.state;
    return (
      <header className="Navbar">
        <div className="logo">
          <a href="#">ReactColorPicker</a>
        </div>
        <div className="slider-container">
          <span>Level: {level}</span>
          <div className="slider">
            <Slider
              defaultValue={level}
              min={100}
              max={900}
              step={100}
              onAfterChange={changeLevel}
            />
          </div>
        </div>
        <div className="select-container">
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={format}
            onChange={this.handleFormatChange}
          >
            <MenuItem value="hex">Hex - #fff</MenuItem>
            <MenuItem value="rgb">RGB - rgb(255,255,255)</MenuItem>
            <MenuItem value="rgba">RGBA - rgba(255,255,255,0.2)</MenuItem>
          </Select>
        </div>
        <Snackbar
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "left",
          }}
          onClose={this.closeSnackbar}
          open={open}
          autoHideDuration={6000}
          message={<span className="message-id">Format Changed to {format.toUpperCase()}!</span>}
          ContentProps={{'aria-describedby': 'message-id'}}
          action={[
              <IconButton onClick={this.closeSnackbar} color='inherit' key='close' aria-label='close'>
                  <CloseIcon></CloseIcon>
              </IconButton>
          ]}
        />
      </header>
    );
  }
}
