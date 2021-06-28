import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { makeStyles } from "@material-ui/core/styles";
import { Button} from "@material-ui/core";

const ContactStyle = makeStyles({
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
    width: "354px",
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
  inputs: {
      display: "flex",
      width: "100%",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
  },
  input: {
      display: "flex",
      maxWidth:'100%',
      width: "50%",
      padding: "20px",
      textAlign: "center",
      marginTop:'40px',
      border: '2px solid #252525',
      '@media(max-width: 1000px)': {
        width:'70%',
      }
  },
  inputMessage: {
    display: "flex",
    maxWidth:'100%',
    width: "50%",
    height: "300px",
    textAlign: "center",
    marginTop:'40px',
    border: '2px solid #252525',
    '@media(max-width: 1000px)': {
      width:'70%',
    }
},
button: {
  color: "#fff",
  fontSize: "20px",
  backgroundColor: "#252525",
  margin: "15px, 0px, 0px",
  padding: "16px",
  borderRadius: "0px",
  border: '2px solid #252525',
  marginTop:'40px',
  marginBottom: '20px'
},
});

const Contact = () => {
  const classes = ContactStyle();
  return (
    <div className={classes.container}>
      <Header />
      <div>
        <p className={classes.title}>LET'S KEEP IN TOUCH</p>
      </div>
      <div className={classes.inputs}>
      <input className={classes.input} type="text" placeholder="NAME"/>
      <input className={classes.input} type="text" placeholder="ADDRESS"/>
      <input className={classes.input} type="email" placeholder="EMAIL"/>
      <input className={classes.input} type="number" placeholder="PHONE NUMBER"/>
      <input className={classes.inputMessage} type="text" placeholder="MESSAGE"/>
      <Button className={classes.button}>SEND</Button>
      </div>
      <Footer />
    </div>
  );
};

export default Contact;
