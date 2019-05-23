import React, { Component } from "react";

class Financials extends Component {
  constructor(props) {
    super(props);
    this.state = this.props.status;

    this.render = this.render.bind(this);
  }
  render() {
    return (
      <div className="container">
        <style jsx>{`
          .container {
            color: white;
            display: inline-block;
          }
          .wrapper {
            background-color: rgba(0, 0, 0, 0.25);
          }
          p {
            font-size: 35px;
            margin-left: 30px;
          }
        `}</style>
        <div className="wrapper">
          <p>Cash on Hand: ${this.state.cashOnHand}</p>
          <p>Income: ${this.state.income}</p>
          <p>Expenditures: ${this.state.expenditures}</p>
          <p>Profit: ${this.state.profit}</p>
        </div>
      </div>
    );
  }
}

export default Financials;
