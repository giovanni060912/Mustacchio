/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/alt-text */
import { Container } from "@material-ui/core";
import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import IconTwitter from "../utils/icons/icon-twitter.jpg";
import IconGooglePlus from "../utils/icons/icon-googleplus.jpg";
import IconFacebook from "../utils/icons/icon-facebook.jpg";
import IconPinterest from "../utils/icons/icon-pinterest.jpg";

const FooterStyle = makeStyles({
  div: {
    display: "flex",
    width: "100%",
    flexDirection: "row",
    color:'#fff',
    justifyContent:'space-evenly',
    alignItems: "center",
    paddingLeft:'80px'
  },
  container: {
    display: "flex",
    margin: '0px',
    maxWidth:'100%',
    backgroundColor:'#252525',
    width: "100%",
    height: "130px",
    alignItems: "center",
    marginTop: "40px",
    marginBottom: "0px",
    padding:'0px',
  },
  ul: {
    display: "flex",
    marginRight:'20px',
    listStyle:'none'
  },
  li:{
    marginRight:'15px',
    cursor: 'pointer'
  }
});

const Footer = () => {
  const classes = FooterStyle();
  return (
    <Container className={classes.container} >
      <div className={classes.div}>
        © 2023 by Mustacchio. All rights reserved.
        <ul className={classes.ul}>
          <li className={classes.li}>
            <img width="44" height="44" src={IconTwitter} />
          </li>
          <li className={classes.li}>
            <img width="44" height="44" src={IconGooglePlus} />
          </li>
          <li className={classes.li}>
          <img width="44" height="44" src={IconFacebook} />
          </li>
          <li className={classes.li}>
          <img width="44" height="44" src={IconPinterest} />
          </li>
        </ul>
      </div>
    </Container>
  );
};

export default Footer;
