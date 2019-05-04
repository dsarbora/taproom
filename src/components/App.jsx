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
      cameFromNavBar: false,
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
              name: "Bud Light",
              ABV: "3",
              price: "2.99",
              id: 1,
              beersLeft: 125
            },
            {
              name: "Manny's Pale Ale",
              ABV: "5.6",
              price: "4.50",
              id: 2,
              beersLeft: 125
            },
            {
              name: "Diamond Knot IPA",
              ABV: "6.2",
              price: "5.99",
              id: 3,
              beersLeft: 125
            },
            {
              name: "German Double Stout",
              ABV: "5.8",
              price: "6.50",
              id: 4,
              beersLeft: 125
            }
          ]
        }
      }
    };
    this.updateState = this.updateState.bind(this);
    this.routedToBarFromNavBar = this.routedToBarFromNavBar.bind(this);
  }

  updateState(newStateObject) {
    this.setState(newStateObject);
    setTimeout(() => {
      this.setState({ cameFromNavBar: false });
    }, 0);
  }

  routedToBarFromNavBar() {
    this.setState({
      cameFromNavBar: true
    });
  }

  render() {
    return (
      <div className="container">
        <style jsx>{`
          .container {
            background-image: url("http://tiny.cc/31v55y");
            margin: -10px -10px -10px -10px;
            min-height: 600px;
            padding-bottom: 20px;
          }
        `}</style>
        <Navbar BarHome={this.routedToBarFromNavBar} />
        <Switch>
          <Route
            exact
            path="/"
            component={() => (
              <Home kegs={this.state.Bar.KegControl.masterKegList} />
            )}
          />
          <Route
            exact
            path="/bar"
            component={() => (
              <Bar
                updateState={this.updateState}
                cameFromNavBar={this.state.cameFromNavBar}
                status={this.state.Bar}
              />
            )}
          />
        </Switch>
      </div>
    );
  }
}

export default App;
