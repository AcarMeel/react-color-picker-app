import React, { Component } from 'react'
import ColorBox from './ColorBox'
import './Palette.css';

import Slider, { Range } from 'rc-slider';
import 'rc-slider/assets/index.css';

export default class Palette extends Component {
    constructor(props) {
        super(props);
        this.state = {
            level: 500
        }
        this.changeLevel = this.changeLevel.bind(this);
    }

    changeLevel(level) {
        this.setState({ level });
    }
    render() {
        const { level } = this.state;
        const { palette } = this.props;
        const colorBoxes = palette.colors[level].map(({id,hex, name}) => (
        <ColorBox key={id} background={hex} name={name} />));
        return (
            <div className="Palette">
                {/* navbar */}
                <Slider defaultValue={level} 
                        min={100} 
                        max={900} 
                        step={100}
                        onAfterChange={this.changeLevel} />
                <div className="Palette-colors">
                    { colorBoxes }
                </div>
                {/* footer */}
            </div>
        )
    }
}
