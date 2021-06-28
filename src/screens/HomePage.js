/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import Header from "../components/Header";
import TheBeacon from "../utils/images/the-beacon.jpg";
import TheActor from "../utils/images/the-actor.jpg";
import TheFather from "../utils/images/the-father.jpg";
import TheNerd from "../utils/images/the-nerd.jpg";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Footer from "../components/Footer";

const HomeStyle = makeStyles({
  container: {
    maxWidth: "100%",
    overflow: "hidden"
  },
  zero: {
    width: "50%",
  },
  box: {
    display: "flex",
    width: "100%",
    marginTop: "60px",
    height: "500px",
    backgroundImage: `url(${TheBeacon})`,
  },
  boxTwo: {
    display: "flex",
    justifyContent: "center",
    flexWrap: "wrap",
    marginTop: "50px",
  },
  boxThree: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "26px",
    fontWeight: "bold",
    textTransform: "uppercase",
    cursor:'pointer',
  },
  img: {
    marginTop: "20px",
    marginBottom: "20px",
    marginRight: "20px",
    border: "2px solid #1a1a1a",
    opacity: "0.8",
    transition: " 0.5s ease-in-out",
    cursor: "pointer",
  },
  lines: {
    maxWidth: "100%",
    justifyContent: " center",
    alignItems: "flex-start",
    flexDirection: "column",
    // paddingLeft: "55%",
    paddingTop: "115px",
  },
  lineOne: {
    width: "430px",
    backgroundColor: "#fff",
    color: "#000",
    fontSize: "20px",
    marginBottom: "14px",
    margin: "0px, 0px, 18px",
    padding: "23px",
    textTransform: "uppercase",
    fontFamily: "poller_oneregular",
    fontWeight: "bold",
  },
  lineTwo: {
    width: "400px",
    backgroundColor: "#252525",
    color: "#fff",
    fontSize: "14px",
    margin: "10px, 0px",
    padding: "14px",
    marginBottom: "14px",
    textTransform: "uppercase",
    fontFamily: "poller_oneregular",
    fontWeight: "bold",
  },
  lineThree: {
    width: "452px",
    backgroundColor: "#252525",
    color: "#fff",
    fontSize: "14px",
    margin: "10px, 0px",
    padding: "14px",
    marginBottom: "14px",
    textTransform: "uppercase",
    fontFamily: "poller_oneregular",
    fontWeight: "bold",
  },
  lineFour: {
    width: "364px",
    backgroundColor: "#252525",
    color: "#fff",
    fontSize: "14px",
    margin: "10px, 0px",
    padding: "14px",
    marginBottom: "14px",
    textTransform: "uppercase",
    fontFamily: "poller_oneregular",
    fontWeight: "bold",
  },
  button: {
    color: "#fff",
    fontSize: "16px",
    backgroundColor: "#0BA39C",
    margin: "15px, 0px, 0px",
    padding: "26px, 27px, 22px",
    borderRadius: "0px",
  },
});

const Home = () => {
  const classes = HomeStyle();
  return (
    <div className={classes.container}>
      <Header />
      <div className={classes.box}>
      <div className={classes.zero}>
      </div>
      <div className={classes.lines}>
          <p className={classes.lineOne}>THE BEACON TO ALL MANKIND</p>
          <p className={classes.lineTwo}>
            Our website templates are created with
          </p>
          <p className={classes.lineThree}>
            inspiration, checked for quality and originality
          </p>
          <p className={classes.lineFour}>and meticulously sliced and coded.</p>
          <Button className={classes.button}>READ MORE</Button>
        </div>
      </div>
      <div className={classes.boxTwo}>
        <div className={classes.boxThree}>
          <img className={classes.img} src={TheFather} />
          <span>THE FATHER</span>
        </div>
        <div className={classes.boxThree}>
          <img className={classes.img} src={TheActor} />
          <span>THE ACTOR</span>
        </div>
        <div className={classes.boxThree}>
          <img className={classes.img} src={TheNerd} />
          <span>THE NERD</span>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
