import React, { Component } from "react";
import Navbar from "./Navbar";
import Home from "./Home";
import Bar from "./Bar";
import KegControl from "./KegControl";
import { Switch, Route } from "react-router-dom";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Bar: {
        financials: {
          income: 0,
          expenditures: 0,
          profit: 0,
          cashOnHand: 200
        },
        showing: null,
        addingNewKeg: false,
        showingDeleteMenu: false,
        KegControl: {
          masterKegList: [
            {
              name: "Manny's Pale Ale",
              ABV: "5.6%",
              price: "4.50",
              id: 1,
              beersLeft: 125
            }
          ]
        }
      }
    };
    this.updateState = this.updateState.bind(this);
  }

  updateState(newStateObject) {
    this.setState(newStateObject);
  }

  render() {
    return (
      <div>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          {/* <Route exact path="/bar/kegs" component={KegControl} /> */}
          <Route
            exact
            path="/bar"
            component={() => (
              <Bar updateState={this.updateState} status={this.state.Bar} />
            )}
          />
        </Switch>
      </div>
    );
  }
}

export default App;
