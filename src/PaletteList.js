import React, { Component } from 'react'
import { withStyles } from "@material-ui/styles";
import MiniPalette from './MiniPalette';

const styles = {
    root: {
        backgroundColor: 'purple',
        height: '100%',
        display: 'flex',
        alignItems: 'flex-start',
        justifyContent: 'center',

    },
    container: {
        width: '50%',
        display: 'flex',
        alignItems: 'flex-start',
        flexDirection: 'column',
        flexWrap: 'wrap'
    },
    nav: {
        display: 'flex',
        justifyContent: 'space-between',
        width: '100%',
        color: 'white'
    },
    palettes: {
        boxSizing: 'border-box',
        width: '100%',
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 30%)',
        gridGap: '5%'
    }
}

class PaletteList extends Component {
    render() {
        const {palettes, classes } = this.props;
        return (
            <div className={classes.root}>
                <div className={classes.container}>
                    <nav className={classes.nav}>
                        <h1 className="">React Colors</h1>
                    </nav>
                    <div className={classes.palettes}>
                        {palettes.map(palette => (
                            <MiniPalette key={palette.id} {...palette} />
                        ))}
                    </div>
                </div>
            </div>
        )
    }
}

export default withStyles(styles)(PaletteList);