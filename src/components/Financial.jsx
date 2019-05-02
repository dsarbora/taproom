import React, { Component } from "react";

class Financials extends Component {
  constructor(props) {
    super(props);
    this.state = this.props.status;
    console.log(this.state);
    this.render = this.render.bind(this);
  }
  render() {
    return (
      <div>
        <p>Cash on Hand: ${this.state.cashOnHand}</p>
        <p>Income: ${this.state.income}</p>
        <p>Expenditures: ${this.state.expenditures}</p>
        <p>Profit: ${this.state.profit}</p>
      </div>
    );
  }
}

export default Financials;
