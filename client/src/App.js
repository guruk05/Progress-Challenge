import React, { Component } from "react";
// import Home from './Components/Home/home'
import "./App.css";
import Nav from "./components/Nav/nav";
import Home from "./components/Home/home";
import Form from "./components/Form/form"
import About from "./components/About/about"
// import 'bootstrap/dist/css/bootstrap.min.css';
// import {Card, Form, InputGroup , CardDeck , Button, Toast} from 'react-bootstrap';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Router>
          <Nav></Nav>
          <Switch>
            <Route path="/" exact component={Home} />
        <Route path="/createmovie" component={Form}/>
        <Route path="/about" component={About}/>
        {/* <Route path="/contact" component={Contact}/> */}
        {/* <Route path="/faq" component={Faq}/> */}
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
