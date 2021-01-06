export default {
    Palette: {
      display: "flex",
      flexDirection: "column",
      height: "100vh",
    },
  
    PaletteColors: {
      height: "90%",
    },
    goBack: {
      width: "20%",
      height: "50%",
      margin: "0 auto",
      display: "inline-block",
      position: "relative",
      cursor: "pointer",
      marginBottom: "-3.5px",
      opacity: 1,
      backgroundColor: 'black',
      '& a': {
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
        color: "white",
        textTransform: "uppercase",
        border: "none",
        textDecoration: "none",
      }
    }
  };