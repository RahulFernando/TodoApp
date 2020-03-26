import React, {Component} from 'react';
import {  BrowserRouter as Router, Route } from 'react-router-dom';

// bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';

// components
import Welcome from "./components/Welcome";
import Landing from "./components/Landing";

class App extends Component {

  render() {
      return (
          <Router>
              <Route exact path="/" component={Welcome}/>
              <Route exact path='/todo' component={Landing}/>
          </Router>
      );
  }
}

export default App;
