import React, { Component } from "react";

class Keg extends Component {
  constructor(props) {
    super(props);
    this.state = {
      beersLeft: 125
    };
  }

  onClickDelete() {
    this.props.onClickDelete(this);
  }
  onClickSellGrowler() {
    this.setState({
      beersLeft: this.state.beersLeft - 5
    });
    this.props.recordSale(this.props.price * 5);
  }
  onClickSellButton() {
    this.setState({
      beersLeft: --this.state.beersLeft
    });
    this.props.recordSale(this.props.price);
  }
  render() {
    let color;
      if (this.state.beersLeft > 30) {
        color = "green";
      } else if (this.state.beersLeft > 10) {
        color = "yellow";
      } else {
        color = "red";
      }
    return (
      <div className="frame">
        <style jsx>{`
          .frame {
            width: 200px;
            height: 200px;
            border: 1px solid black;
            padding-top: 10px;
            text-align: center;
            margin-top: 10px;
            margin-right: 10px;
            background-color: ${color};
          }
          .frame:hover {
            box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.2);
          }
          button {
            padding: 10px 15px 10px 15px;
            border-radius: 5px;
            text-align: center;
            margin-right: 10px;
            box-shadow: 1px -1px 1px rgba(0, 0, 0, 1);
          }

          .sell {
            float: right;
          }

          .sellGrowler {
            float: left;
          }

          .delete {
          }

          button:hover {
            box-shadow: 0 0 0 rgba(0, 0, 0, 0);
            background-color: lightgreen;
            color: black;
          }
        `}</style>
        <p>
          {/* <button className="delete" onClick={() => this.onClickDelete()}>
            Delete Keg
          </button> */}
          <strong>{this.props.name}</strong>
        </p>
        <p>{this.props.ABV} ABV</p>
        <p>${this.props.price}</p>
        <p>Should have {this.state.beersLeft} beers left.</p>

        <button
          className="sellGrowler"
          onClick={() => this.onClickSellGrowler()}
        >
          Sell Growler
        </button>
        <button className="sell" onClick={() => this.onClickSellButton()}>
          Sell
        </button>
      </div>
    );
  }
}
export default Keg;
