export default {
    Navbar: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-start',
        height: '6vh',
    },
    
    logo: {
        display: 'flex',
        alignItems: 'center',
        marginRight: '15px',
        padding: '0 13px',
        fontSize: '22px',
        backgroundColor: '#eceff1',
        fontFamily: "'Roboto', sans-serif",
        height: '100%',
        '& a': {
            textDecoration: 'none',
            color: 'black',
        }
    },
    
    slider: {
        display: 'inline-block',
        width: '340px',
        margin: '0 10px',
        '& .rc-slider-track': {
            backgroundColor: 'transparent'
        },
        "& .rc-slider-handle,.rc-slider-handle:active,.rc-slider-handle:focus,.rc-slider-handle:hover": {
            backgroundColor: 'green',
            outline: 'none',
            border: '2px solid green',
            boxShadow: 'none',
            width: '13px',
            height: '13px',
        },
        '& .rc-slider-rail': {
            height: '8px',
        }
    },
    selectContainer: {
        marginLeft: 'auto',
        marginRight: '1rem',
    }
}