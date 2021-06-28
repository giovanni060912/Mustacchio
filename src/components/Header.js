/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/alt-text */
import { Container } from "@material-ui/core";
import React from "react";
import Logo from "../utils/icons/Logo.jpg";
import { makeStyles } from '@material-ui/core/styles';
import { Link } from "react-router-dom";


const HeaderStyle = makeStyles({
  nav: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      marginTop:'40px',
  },
  box: {
    marginTop:'40px'
  },
  opitions: {
      marginRight:'30px',
      color: '#252525',
      display: 'inline-block',
      fontFamily: 'sans-serif',
      fontSize: '16px',
      fontWeight: 'bold',
      textTransform: 'uppercase',
      cursor: 'pointer',
      textDecoration:'none',
      selected: {color: '#0ba39c'}
  }
});

const Header = () => {
    const classes = HeaderStyle();
    return (
    <Container className={classes.nav}>
      <img width="340" height="100" src={Logo} />
      <div className={classes.box}>
        <Link to="/" className={classes.opitions}>HOME</Link>
        <Link to="/about" className={classes.opitions}>ABOUT</Link>
        <Link to="/gallery" className={classes.opitions}>GALLERY</Link>
        <Link to="/blog" className={classes.opitions}>BLOG</Link>
        <Link to="/contact" className={classes.opitions}>CONTACT</Link>
      </div>
    </Container>
  );
};

export default Header;
