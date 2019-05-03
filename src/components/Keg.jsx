import React, { Component } from "react";

class Keg extends Component {
  constructor(props) {
    super(props);
    this.state = this.props.status;
  }

  updateBarComponent() {
    setTimeout(() => {
      this.props.updateKegControlState(this.state);
    }, 0);
  }

  onClickEditButton() {
    this.setState({
      editFormShowing: true
    });
  }

  onSubmitEdit(name, ABV, price, cost) {
    event.preventDefault();
    if (!name) {
      name = this.state.name;
    }
    if (!ABV) {
      ABV = this.state.ABV;
    }
    if (!price) {
      price = this.state.price;
    }
    if (!cost) {
      cost = this.state.cost;
    }
    this.setState({
      name: name,
      ABV: ABV,
      price: price,
      cost: cost,
      editFormShowing: false
    });

    this.props.updateBarComponent(this.state);
  }

  onClickDelete() {
    this.props.onClickDelete(this);
  }
  onClickSellGrowler() {
    this.setState({
      beersLeft: this.state.beersLeft - 5
    });
    this.props.recordSale(this.state.price * 5);

    this.updateBarComponent(this.state);
  }
  onClickSellButton() {
    this.setState({
      beersLeft: --this.state.beersLeft
    });

    this.props.recordSale(this.state.price);

    this.updateBarComponent(this.state);
  }

  determineColor() {
    let beersMissing = 125 - this.state.beersLeft;
    let red = Math.min(255, 510 - this.state.beersLeft * 4);
    let green = this.state.beersLeft + (135 - this.state.beersLeft) * 2;
    if (green > 255) {
      green = Math.max(0, green - (green - 255) * (green - 255));
    }
    let blue = 0;
    let color = `rgb(${red}, ${green}, ${blue})`;
    return color;
    // if (this.state.beersLeft > 30) {
    //   color = "green";
    // } else if (this.state.beersLeft > 10) {
    //   color = "yellow";
    // } else {
    //   color = "red";
    // }
  }
  render() {
    let beersLeftMessage;
    let _name = null;
    let _ABV = null;
    let _price = null;
    let _cost = null;
    let color = this.determineColor();
    if (this.state.beersLeft > 0) {
      beersLeftMessage = `Should have ${this.state.beersLeft} beers left.`;
    } else if (this.state.beersLeft > -10) {
      beersLeftMessage = "This keg should be empty.";
    } else {
      beersLeftMessage = "Is it really not empty?";
    }
    if (!this.state.editFormShowing) {
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
            .edit {
              background-color: yellow;
              position: relative;
              top: 0px;
              height: 30px;
              vertical-align: middle;
              padding: 2px;
              margin: 0px;
              float: right;
            }
          `}</style>
          <button onClick={() => this.onClickEditButton()} className="edit">
            Edit
          </button>
          <p>
            <strong>{this.state.name}</strong>
          </p>
          <p>{this.state.ABV}% ABV</p>
          <p>${this.state.price}</p>
          <p>{beersLeftMessage}</p>

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
    } else {
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
              background-color: yellow;
            }
            .frame:hover {
              box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.2);
            }

            input {
              margin-bottom: 10px;
            }
            button {
              border-radius: 5px;
              background-color: lightgreen;
              padding: 10px;
            }
          `}</style>
          <form
            onSubmit={() =>
              this.onSubmitEdit(
                _name.value,
                _ABV.value,
                _price.value,
                _cost.value
              )
            }
          >
            <input
              type="text"
              placeholder={this.state.name}
              ref={input => {
                _name = input;
              }}
            />
            <input
              placeholder={"Alcohol By Volume"}
              ref={input => {
                _ABV = input;
              }}
            />
            <input
              placeholder="Price of Beer"
              ref={input => {
                _price = input;
              }}
            />
            <input
              placeholder="Cost of Keg"
              ref={input => {
                _cost = input;
              }}
            />
            <button type="submit">Save Changes</button>
          </form>
        </div>
      );
    }
  }
}
export default Keg;
