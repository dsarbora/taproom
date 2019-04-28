import React, { Component } from "react";
import KegList from "./KegList";
import DeleteMenu from "./DeleteMenu";
import AddKegForm from "./AddKegForm";

class KegControl extends Component {
  constructor(props) {
    super(props);
    this.state = {
      masterKegList: [
        {
          name: "Manny's Pale Ale",
          ABV: "5.6%",
          price: "4.50",
          id: 1
        }
      ],
      addingNewKeg: false,
      showingDeleteMenu: false
    };
    this.handleAddingNewKegToList = this.handleAddingNewKegToList.bind(this);
    this.handleDeletingKegFromList = this.handleDeletingKegFromList.bind(this);
    this.showDeleteMenu = this.showDeleteMenu.bind(this);
  }
  handleAddingNewKegToList(keg) {
    let kegList = this.state.masterKegList.slice();
    kegList.push(keg);

    this.setState({
      masterKegList: kegList,
      addingNewKeg: false
    });
    setTimeout(() => {
      this.props.recordNewPurchase(keg.cost);
    }, 0);
  }

  getKegIndex(keg, arr) {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i].id == keg.props.id) {
        return i;
      }
    }
  }

  handleDeletingKegFromList(keg) {
    console.log(keg);
    let kegList = this.state.masterKegList.slice();

    let kegIndex = this.getKegIndex(keg, kegList);
    kegList.splice(kegIndex, 1);

    this.setState({
      masterKegList: kegList,
      showingDeleteMenu: false
    });
  }

  showDeleteMenu() {
    this.setState({
      showingDeleteMenu: true
    });
  }

  addNewKeg() {
    this.setState({
      addingNewKeg: true
    });
  }

  render() {
    if (!this.state.addingNewKeg && !this.state.showingDeleteMenu) {
      return (
        <div>
          <p>Keg Control Works</p>
          <button onClick={() => this.addNewKeg()}>Add new Keg</button>
          <div>
            <KegList
              onClickDeleteMenu={this.showDeleteMenu}
              onClickDelete={this.handleDeletingKegFromList}
              recordSale={this.props.recordSale}
              onAddingNewKeg={this.handleAddingNewKegToList}
              kegList={this.state.masterKegList}
            />
          </div>
        </div>
      );
    } else if (this.state.showingDeleteMenu) {
      return (
        <DeleteMenu
          onClickDelete={this.handleDeletingKegFromList}
          kegList={this.state.masterKegList}
        />
      );
    } else {
      return <AddKegForm onClickingAddNewKeg={this.handleAddingNewKegToList} />;
    }
  }
}
export default KegControl;
