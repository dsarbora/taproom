import React, { Component } from "react";
import Intro from "./Intro";
import Game from 'Game';
import { Switch, Route } from "react-router-dom";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/kegs" component={KegControl}/>
        </Switch>
      </div>
    );
  }
}

export default App;
