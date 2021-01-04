import React, { Component } from 'react'
import ColorBox from './ColorBox'
import './Palette.css';

export default class Palette extends Component {
    render() {
        const colorBoxes = this.props.colors.map(({color, name}, index) => (
        <ColorBox key={`${color}-${index}`} background={color} name={name} />));
        return (
            <div className="Palette">
                {/* navbar */}
                <div className="Palette-colors">
                    { colorBoxes }
                </div>
                {/* footer */}
            </div>
        )
    }
}
