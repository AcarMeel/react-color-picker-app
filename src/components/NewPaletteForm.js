import React, { Component } from "react";
import classNames from "classnames";
import { withStyles } from "@material-ui/core/styles";
// import PaletteFormNav from "./PaletteFormNav";
// import ColorPickerForm from "./ColorPickerForm";
import Drawer from "@material-ui/core/Drawer";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import Button from "@material-ui/core/Button";
// import DraggableColorList from "./DraggableColorList";
import DraggableColorBox from "./DraggableColorBox";
// import { arrayMove } from "react-sortable-hoc";
import styles from "../styles/NewPaletteFormStyles";
import seedColors from "../seedColors";
import { ChromePicker } from "react-color";
import { ValidatorForm, TextValidator } from "react-material-ui-form-validator";

class NewPaletteForm extends Component {
  static defaultProps = {
    maxColors: 20,
  };
  constructor(props) {
    super(props);
    this.state = {
      open: true,
      colors: seedColors[0].colors,
      currentColor: "deeppink",
      newName: "",
    };
    this.addNewColor = this.addNewColor.bind(this);
    this.updateCurrentColor = this.updateCurrentColor.bind(this);
  }
  componentDidMount() {
    ValidatorForm.addValidationRule('isColorNameUnique', (value) => {
      return this.state.colors.every(({name}) => name.toLocaleLowerCase() !== value.toLocaleLowerCase());
    });
    ValidatorForm.addValidationRule('isColorUnique', (value) => {
      return this.state.colors.every(({color}) => color !== this.state.currentColor);
    });
}

  handleDrawerOpen = () => {
    this.setState({ open: true });
  };

  handleDrawerClose = () => {
    this.setState({ open: false });
  };

  handleChange = (e) => {
    this.setState({ newName: e.target.value });
  };

  handleSubmit = () => {
    this.addNewColor();
  };

  addNewColor() {
    const newColor = {
      color: this.state.currentColor,
      name: this.state.newName,
    };
    this.setState({
      colors: [...this.state.colors, newColor],
      newName: ''
    });
  }

  updateCurrentColor(newColor) {
    this.setState({ currentColor: newColor.hex });
  }

  render() {
    const { classes, maxColors, palettes } = this.props;
    const { open, colors, currentColor, newName } = this.state;
    const paletteIsFull = colors.length >= maxColors;

    return (
      <div className={classes.root}>
        {/* <PaletteFormNav
          open={open}
          palettes={palettes}
          handleSubmit={this.handleSubmit}
          handleDrawerOpen={this.handleDrawerOpen}
        /> */}
        <Drawer
          className={classes.drawer}
          variant="persistent"
          anchor="left"
          open={open}
          classes={{
            paper: classes.drawerPaper,
          }}
        >
          <div className={classes.drawerHeader}>
            <IconButton onClick={this.handleDrawerClose}>
              <ChevronLeftIcon />
            </IconButton>
          </div>
          <Divider />
          <div className={classes.container}>
            <Typography variant="h4" gutterBottom>
              Design Your Palette
            </Typography>
            <div className={classes.buttons}>
              <Button
                variant="contained"
                color="secondary"
                // onClick={this.clearColors}
                className={classes.button}
              >
                Clear Palette
              </Button>
              <Button
                variant="contained"
                className={classes.button}
                color="primary"
                // onClick={this.addRandomColor}
                disabled={paletteIsFull}
              >
                Random Color
              </Button>
            </div>
            {/* <ColorPickerForm
              paletteIsFull={paletteIsFull}
              addNewColor={this.addNewColor}
              colors={colors}
            /> */}
            <ChromePicker
              color={currentColor}
              onChangeComplete={this.updateCurrentColor}
            />
            <ValidatorForm
              onSubmit={this.handleSubmit}
              onError={(errors) => console.log(errors)}
            >
              <TextValidator
                label="Color Name"
                onChange={this.handleChange}
                name="newName"
                value={newName}
                validators={['required', 'isColorNameUnique', 'isColorUnique']}
                errorMessages={['this field is required', 'This color name already exists', 'This color already exists']}
              />
              <Button
                variant="contained"
                color="primary"
                style={{ backgroundColor: currentColor }}
                type="submit"
              >
                Add Color
              </Button>
            </ValidatorForm>
          </div>
        </Drawer>
        <main
          className={classNames(classes.content, {
            [classes.contentShift]: open,
          })}
        >
          <div className={classes.drawerHeader} />
          {/* <DraggableColorList
            colors={colors}
            removeColor={this.removeColor}
            axis='xy'
            onSortEnd={this.onSortEnd}
            distance={20}
          /> */}
          {colors.map((color) => (
            <DraggableColorBox
              key={color.color}
              color={color.color}
              name={color.name}
            />
          ))}
        </main>
      </div>
    );
  }
}
export default withStyles(styles, { withTheme: true })(NewPaletteForm);