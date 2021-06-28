/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { makeStyles } from "@material-ui/core/styles";
import photographer from "../utils/images/photographer.jpg";

const AboutStyle = makeStyles({
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
  img: {
    display: "flex",
    width: "620px",
    maxWidth: "85%",
    height: "299px",
    border: "2px solid #292929",
    marginBottom: "30px",
  },
  box: {
    display: "flex",
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
  },
  span: {
    color: "#252525",
    lineHeight: "24px",
    marginTop: "20px",
    margin: "0px",
    padding: "0px",
  },
  paragraph: {
    display: "flex",
    width: "100%",
    marginTop: "20px",
    maxWidth: "40%",
    color: "#252525",
    lineHeight: "24px",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    '@media(max-width: 1000px)': {
      maxWidth: "80%",
    }
  },
  link: {
    color: "#000",
  },
});

const About = () => {
  const classes = AboutStyle();
  return (
    <div className={classes.container}>
      <Header />
      <div className={classes.box}>
        <p className={classes.title}>MUSTACCHIO STARTED</p>
        <img className={classes.img} src={photographer} />
      </div>
      <div className={classes.paragraph}>
        <h3 className={classes.span}>We Have Free Templates for Everyone</h3>
        <p>
          Our website templates are created with inspiration, checked for
          quality and originality and meticulously sliced and coded. What’s
          more, they’re absolutely free! You can do a lot with them. You can
          modify them. You can use them to design websites for clients, so long
          as you agree with the{" "}
          <a className={classes.link} href="http://">
            {" "}
            Terms of Use
          </a>
          . You can even remove all our links if you want to
        </p>
      </div>
      <div className={classes.paragraph}>
        <h3 className={classes.span}>We Have More Templates for You</h3>
        <p>
          Looking for more templates? Just browse through all our{" "}
          <a className={classes.link} href="http://">
            {" "}
            Free Website Templates
          </a>{" "}
          and find what you’re looking for. But if you don’t find any website
          template you can use, you can try our{" "}
          <a className={classes.link} href="http://">
            {" "}
            Free Web Design
          </a>{" "}
          service and tell us all about it. Maybe you’re looking for something
          different, something special. And we love the challenge of doing
          something different and something special.
        </p>
      </div>
      <div className={classes.paragraph}>
        <h3 className={classes.span}>Be Part of Our Community</h3>
        <p>
          If you’re experiencing issues and concerns about this website
          template, join the discussion on{" "}
          <a className={classes.link} href="http://">
            {" "}
            on our forum{" "}
          </a>{" "}
          and meet other people in the community who share the same interests
          with you.
        </p>
      </div>
      <div className={classes.paragraph}>
        <h3 className={classes.span}>Template details</h3>
        <p>
          Design version 2. Code version 1. Website Template details, discussion
          and updates for{" "}
          <a className={classes.link} href="http://">
            this Mustache Enthusiast Website Template
          </a>
          . Website Template design by{" "}
          <a className={classes.link} href="http://">
            {" "}
            Free Website Templates
          </a>
          . Please feel free to remove some or all the text and links of this
          page and replace it with your own About content.
        </p>
      </div>
      <Footer />
    </div>
  );
};

export default About;
