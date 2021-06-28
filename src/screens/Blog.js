/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { makeStyles } from "@material-ui/core/styles";
import Cutting from "../utils/images/cutting-mustache.jpg";
import TheCountry from '../utils/images/in-the-country.jpg';
import MustacheBrother from '../utils/images/mustache-brothers.jpg';
import Button from "@material-ui/core/Button";


const BlogStyle = makeStyles({
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
    width: "154px",
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
  box: {
      display: "flex",
      width: "100%",
      maxWidth: "80%",
      border: "2px solid #000",
      marginTop:'40px',
      alignItems: "center",
      textAlign: "center",
      '@media(max-width: 1000px)': {
        flexDirection:' column',
        padding: '10px',
      }
  },
  img:{
      borderRight:'2px solid #000',
      marginBottom:'-2px',
      '@media(max-width: 1000px)': {
        width:'365px',
        maxWidth:'100%',
        border: '0'
      }

  },
  span:{
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    color: "#252525",
    fontSize: "28px",
    margin: "10px, 0px",
    padding: "4px",
    marginBottom: "14px",
    textTransform: "uppercase",
    fontFamily: "poller_oneregular",
    fontWeight: "bold",
    marginTop: "10px",
  },
  text:{
    display: "flex",
    maxWidth: "90%",
    justifyContent: "center",
    alignItems: "center",
    color: "#252525",
    fontSize: "16px",
    margin: "10px, 0px",
    padding: "4px",
    marginBottom: "14px",
    lineHeight:"20px",
    paddingLeft:'30px',
    marginTop: "10px",
  },
  button: {
    color: "#fff",
    fontSize: "20px",
    backgroundColor: "#252525",
    margin: "15px, 0px, 0px",
    padding: "26px, 27px, 22px",
    borderRadius: "0px",
    border: '2px solid #252525',
  },
});

const Blog = () => {
  const classes = BlogStyle();
  return (
    <div className={classes.container}>
      <Header />
      <div>
        <p className={classes.title}>Blog</p>
      </div>
      <div className={classes.box}>
      <div>
        <img className={classes.img} src={Cutting} />
        </div>
        <div >
          <p className={classes.span}>WHY I GREW A MUSTACHE</p>
          <p className={classes.text}>
            Our website templates are created with inspiration, checked for
            quality and originality and meticulously sliced and coded. What’s
            more, they’re absolutely free! You can do a lot with them. You can
            modify them.
          </p>
          <Button className={classes.button}>READ THIS</Button>
        </div>
      </div>
      <div className={classes.box}>
      <div>
        <img className={classes.img} src={TheCountry} />
        </div>
        <div>
          <p className={classes.span}>IN THE COUNTRY</p>
          <p className={classes.text}>
            Our website templates are created with inspiration, checked for
            quality and originality and meticulously sliced and coded. What’s
            more, they’re absolutely free! You can do a lot with them. You can
            modify them.
          </p>
          <Button className={classes.button}>READ THIS</Button>
        </div>
      </div>
      <div className={classes.box}>
      <div>
        <img className={classes.img} src={MustacheBrother} />
        </div>
        <div>
          <p className={classes.span}>THE MUSTACHE BROTHERS</p>
          <p className={classes.text}>
            Our website templates are created with inspiration, checked for
            quality and originality and meticulously sliced and coded. What’s
            more, they’re absolutely free! You can do a lot with them. You can
            modify them.
          </p>
          <Button className={classes.button}>READ THIS</Button>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Blog;
