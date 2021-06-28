/* eslint-disable eqeqeq */
/* eslint-disable no-lone-blocks */
/* eslint-disable no-unused-expressions */
/* eslint-disable no-undef */
/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import { listImages } from "./index";
import { makeStyles } from "@material-ui/core/styles";
import Image1 from "../utils/images/mustache1.jpg";
import Image2 from "../utils/images/mustache2.jpg";
import Image3 from "../utils/images/mustache3.jpg";
import Image4 from "../utils/images/mustache4.jpg";
import Image5 from "../utils/images/mustache5.jpg";
import Image6 from "../utils/images/mustache6.jpg";
import Image7 from "../utils/images/mustache7.jpg";
import Image8 from "../utils/images/mustache8.jpg";
import Image9 from "../utils/images/mustache9.jpg";

const SliceStyle = makeStyles({
  img: {
    padding: "20xp",
    paddingBottom: "10px",
    paddingLeft: "30px",
  },
  div: {
    display: "flex",
    flexDirection: "column",
    textAlign: "center",
    paddingBottom: "20px",
    textTransform: "uppercase",
    fontFamily: "poller_oneregular",
    fontWeight: "bold",
    fontSize: "16px",
  },
});

const ArrayImage = () => {
  const classes = SliceStyle();
  return (
    <>
      {listImages.map((item, i) => {
        return (
          <div className={classes.div} key={i}>
            {item.name == "image1" ? (
              <img className={classes.img} src={Image1} />
            ) : item.name == "image2" ? (
              <img className={classes.img} src={Image2} />
            ) : item.name == "image3" ? (
              <img className={classes.img} src={Image3} />
            ) : item.name == "image4" ? (
              <img className={classes.img} src={Image4} />
            ) : item.name == "image5" ? (
              <img className={classes.img} src={Image5} />
            ) : item.name == "image6" ? (
              <img className={classes.img} src={Image6} />
            ) : item.name == "image7" ? (
              <img className={classes.img} src={Image7} />
            ) : item.name == "image8" ? (
              <img className={classes.img} src={Image8} />
            ) : item.name == "image9" ? (
              <img className={classes.img} src={Image9} />
            ) : (
              ""
            )}
            {item.name}
          </div>
        );
      })}
    </>
  );
};
export default ArrayImage;
