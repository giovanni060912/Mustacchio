import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import About from "../screens/About";
import Blog from "../screens/Blog";
import Gallery from "../screens/Gallery";
import HomePage from "../screens/HomePage";
import Contact from "../screens/Contact";

export default function App () {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/">
            <HomePage />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/gallery">
            <Gallery />
          </Route>
          <Route path="/blog">
            <Blog />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};
