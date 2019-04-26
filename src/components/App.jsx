import React, { Component } from "react";
import Navbar from "./Navbar";
import Home from "./Home";
import KegControl from "./KegControl";
import { Switch, Route } from "react-router-dom";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/kegs" component={KegControl} />
        </Switch>
      </div>
    );
  }
}

export default App;
