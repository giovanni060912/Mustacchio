import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { makeStyles } from "@material-ui/core/styles";
import ArrayImage from "../components/slice";


const GalleryStyle = makeStyles({
    container: {
        display: "flex",
        width: "100%",
        height: "100%",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        marginBottom: "0px",
      },
    title: {
        display: "flex",
        width: "554px",
        maxWidth: "80%",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#252525",
        color: "#fff",
        fontSize: "24px",
        margin: "10px, 0px",
        padding: "24px",
        marginBottom: "14px",
        textTransform: "uppercase",
        fontFamily: "poller_oneregular",
        fontWeight: "bold",
        marginTop: "40px",
      },
      div: {
        display: "flex",
        width:'100%',
        maxWidth: "80%",
        flexWrap:'wrap',
        justifyContent: "center",
        alignItems: "center",
        padding: '20px',
        paddingBottom: '20px',
    }
  });


const Gallery = () => {
    const classes = GalleryStyle();
  return (
    <div className={classes.container}>
      <Header />
      <div className={classes.title}>
      <p>Gallery</p>
    </div>
    <div className={classes.div}>
    <ArrayImage/>
    </div>
    <Footer />
    </div>
  );
};

export default Gallery;
