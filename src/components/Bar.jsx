import React, { Component } from "react";
import Financial from "./Financial";
import KegControl from "./KegControl";
import { Link } from "react-router-dom";
import BarNav from "./BarNav";
import { Switch, Route } from "react-router-dom";

class Bar extends Component {
  constructor(props) {
    super(props);
    this.state = this.props.status;
    // this.state = {
    //   financials: {
    //     income: 0,
    //     expenditures: 0,
    //     profit: 0,
    //     cashOnHand: 200
    //   },
    //   showing: null
    // };
    this.recordSale = this.recordSale.bind(this);
    this.navFromBarNav = this.navFromBarNav.bind(this);
    this.recordNewPurchase = this.recordNewPurchase.bind(this);
    this.updateBarStateFromKegControl = this.updateBarStateFromKegControl.bind(
      this
    );
    this.updateBarStateFromFinancials = this.updateBarStateFromFinancials.bind(
      this
    );
  }

  updateAppState() {
    setTimeout(() => {
      return this.props.updateState({ Bar: this.state });
    }, 0);
  }

  updateBarStateFromKegControl(stateObject) {
    this.setState({ KegControl: stateObject });

    this.updateAppState();
  }

  updateBarStateFromFinancials(stateObject) {
    this.setState({ financials: stateObject });

    this.updateAppState();
  }

  showFinancials() {
    this.setState({
      showing: "financials"
    });

    this.updateAppState();
  }

  showKegs() {
    this.setState({
      showing: "kegs",
      addingNewKeg: false
    });

    this.updateAppState();
  }

  navFromBarNav(input) {
    this.setState({
      showing: input
    });

    this.updateAppState();
  }

  switchToBarHome() {
    if (this.state.cameFromNavBar === true) {
      this.setState({ showing: null });
    }

    this.updateAppState();
  }

  recordNewPurchase(price) {
    let expense = parseFloat(price);
    let newIncome = this.state.financials.income;
    let newExpenditures = this.state.financials.expenditures + expense;
    let newProfit = this.state.financials.profit - expense;
    let newCashOnHand = this.state.financials.cashOnHand - expense;

    this.setState({
      financials: {
        income: parseFloat(newIncome.toFixed(2)),
        expenditures: parseFloat(newExpenditures.toFixed(2)),
        profit: parseFloat(newProfit.toFixed(2)),
        cashOnHand: parseFloat(newCashOnHand.toFixed(2))
      }
    });

    setTimeout(() => {
      this.updateBarStateFromFinancials();
    }, 0);
  }

  recordSale(price) {
    let income = parseFloat(price);
    let newIncome = this.state.financials.income + income;
    let newExpenditures = this.state.financials.expenditures;
    let newProfit = this.state.financials.profit + income;
    let newCashOnHand = this.state.financials.cashOnHand + income;

    this.setState({
      financials: {
        income: parseFloat(newIncome.toFixed(2)),
        expenditures: parseFloat(newExpenditures.toFixed(2)),
        profit: parseFloat(newProfit.toFixed(2)),
        cashOnHand: parseFloat(newCashOnHand.toFixed(2))
      }
    });
  }

  render() {
    var visibleContent;
    if (this.state.showing == "kegs") {
      visibleContent = (
        <div>
          <BarNav onSelect={this.navFromBarNav} />
          <KegControl
            updateState={this.updateBarStateFromKegControl}
            status={this.state.KegControl}
            recordNewPurchase={this.recordNewPurchase}
            recordSale={this.recordSale}
          />
        </div>
      );
    } else if (this.state.showing == "financials") {
      visibleContent = (
        <div>
          <BarNav onSelect={this.navFromBarNav} />
          <Financial
            updateState={this.updateBarStateFromFinancials}
            status={this.state.financials}
          />
        </div>
      );
    }
    if (!visibleContent) {
      return (
        <div>
          <style jsx>{`
            .takeMe {
              margin: 50px;
              border: 1px solid black;
              width: 150px;
              height: 200px;
              text-align: center;
              background-color: lightgreen;
            }

            .box {
              display: flex;
            }
          `}</style>
          <div className="box">
            <div onClick={() => this.showKegs()} className="takeMe">
              <h1>See Kegs</h1>
            </div>

            <div onClick={() => this.showFinancials()} className="takeMe">
              <h1>See Financials</h1>
            </div>
          </div>
        </div>
      );
    } else {
      return <div>{visibleContent}</div>;
    }
  }
}

export default Bar;
