import React, { Component } from "react";
import Financial from "./Financial";
import KegControl from "./KegControl";
import { Link } from "react-router-dom";
import BarNav from "./BarNav";
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
    this.navFromBarNav = this.navFromBarNav.bind(this);
    this.recordNewPurchase = this.recordNewPurchase.bind(this);
  }

  showFinancials() {
    this.setState({
      showing: "financials"
    });
  }

  showKegs() {
    this.setState({
      showing: "kegs"
    });
  }

  navFromBarNav(input) {
    this.setState({
      showing: input
    });
  }

  recordNewPurchase(price) {
    let money = parseFloat(price);
    let newIncome = this.state.financials.income;
    let newExpenditures = this.state.financials.expenditures + money;
    let newProfit = this.state.financials.profit - money;
    let newCashOnHand = this.state.financials.cashOnHand - money;

    this.setState({
      financials: {
        income: parseFloat(newIncome.toFixed(2)),
        expenditures: parseFloat(newExpenditures.toFixed(2)),
        profit: parseFloat(newProfit.toFixed(2)),
        cashOnHand: parseFloat(newCashOnHand.toFixed(2))
      }
    });
  }

  recordSale(price) {
    let money = parseFloat(price);
    let newIncome = this.state.financials.income + money;
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
  }
  render() {
    var visibleContent;
    if (this.state.showing == "kegs") {
      visibleContent = (
        <div>
          <BarNav onSelect={this.navFromBarNav} />
          <KegControl
            recordNewPurchase={this.recordNewPurchase}
            recordSale={this.recordSale}
          />
        </div>
      );
    } else if (this.state.showing == "financials") {
      visibleContent = (
        <div>
          <BarNav onSelect={this.navFromBarNav} />
          <Financial financials={this.state.financials} />
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
