import React, { Component } from "react";
import Financial from "./Financial";
import KegControl from "./KegControl";
import { Link } from "react-router-dom";
import { Switch, Route } from "react-router-dom";

class Bar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      financials: {
        income: 0,
        expenditures: 0,
        profit: 0,
        cashOnHand: 200
      },
      showing: null
    };
    this.recordSale = this.recordSale.bind(this);
  }

  recordSale(price) {
    let money = parseFloat(price);
    let newIncome = this.state.financials.income + money;
    console.log(newIncome);
    let newExpenditures = this.state.financials.expenditures;
    let newProfit = this.state.financials.profit + money;
    let newCashOnHand = this.state.financials.cashOnHand + money;
    this.setState({
      financials: {
        income: parseFloat(newIncome.toFixed(2)),
        expenditures: parseFloat(newExpenditures.toFixed(2)),
        profit: parseFloat(newProfit.toFixed(2)),
        cashOnHand: parseFloat(newCashOnHand.toFixed(2))
      }
    });
    setTimeout(() => {
      console.log("below me");
      console.log(this.state.financials.income);
    }, 0);
  }
  render() {
    return (
      <div>
        <Switch>
          <Route
            exact
            path="/bar/financials"
            render={() => <Financial financials={this.state.financials} />}
          />
          <Route
            exact
            path="/bar/kegs"
            render={() => <KegControl recordSale={this.recordSale} />}
          />
        </Switch>
        <Link to="/bar/kegs">
          <div class="takeMe">
            <h1>See Kegs</h1>
          </div>
        </Link>
      </div>
    );
  }
}

export default Bar;
