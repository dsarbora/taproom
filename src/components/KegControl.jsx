import React, { Component } from "react";
import KegList from "./KegList";
import AddKegForm from "./AddKegForm";

class KegControl extends Component {
  constructor(props) {
    super(props);
    this.state = {
      masterKegList: [
        {
          name: "Manny's Pale Ale",
          ABV: "5.6%",
          price: "15.99"
        }
      ],
      addingNewKeg: false
    };
    this.handleAddingNewKegToList = this.handleAddingNewKegToList.bind(this);
  }
  handleAddingNewKegToList(keg) {
    let kegList = this.state.masterKegList.slice();
    kegList.push(keg);
    this.setState({
      masterKegList: kegList
    });
  }

  addNewKeg() {
    this.setState({
      addingNewKeg: true
    });
  }

  render() {
    if (!this.state.addingNewKeg) {
      return (
        <div>
          <p>Keg Control Works</p>
          <button onClick={() => this.addNewKeg()}>Add new Keg</button>
          <div>
            <KegList
              onAddingNewKeg={this.handleAddingNewKegToList}
              kegList={this.state.masterKegList}
            />
          </div>
        </div>
      );
    } else {
      return <AddKegForm onClickingAddNew={this.state.handleClickingAddNew} />;
    }
  }
}
export default KegControl;
