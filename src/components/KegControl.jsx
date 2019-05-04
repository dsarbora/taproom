import React, { Component } from "react";
import KegList from "./KegList";
import DeleteMenu from "./DeleteMenu";
import AddKegForm from "./AddKegForm";

class KegControl extends Component {
  constructor(props) {
    super(props);
    this.state = this.props.status;

    //this.handleAddingNewKegToList = this.handleAddingNewKegToList.bind(this);
    this.updateStateFromAddKegForm = this.updateStateFromAddKegForm.bind(this);
    this.showDeleteMenu = this.showDeleteMenu.bind(this);
    this.updateKegControlStateFromKeg = this.updateKegControlStateFromKeg.bind(
      this
    );
    this.updateKegControlStateFromDeleteMenu = this.updateKegControlStateFromDeleteMenu.bind(
      this
    );
    this.updateBarState = this.updateBarState.bind(this);
  }

  updateBarState() {
    setTimeout(() => {
      this.props.updateState(this.state);
    }, 0);
  }

  updateKegControlStateFromKeg(newStateObject) {
    let kegListToBeUpdated = this.state.masterKegList.slice();
    let kegIndex = this.getKegIndex(newStateObject, kegListToBeUpdated);
    kegListToBeUpdated.splice(kegIndex, 1, newStateObject);
    this.setState({
      masterKegList: kegListToBeUpdated
    });
    setTimeout(() => {
      this.updateBarState();
    }, 0);
  }

  updateKegControlStateFromDeleteMenu(objectToBeDeleted) {
    let kegListToBeUpdated = this.state.masterKegList.slice();
    let kegIndex = this.getKegIndex(objectToBeDeleted, kegListToBeUpdated);
    kegListToBeUpdated.splice(kegIndex, 1);
    this.setState({
      masterKegList: kegListToBeUpdated,
      showingDeleteMenu: false
    });
    setTimeout(() => {
      this.updateBarState();
    }, 0);
  }

  updateStateFromAddKegForm(keg) {
    let kegListToBeUpdated = this.state.masterKegList.slice();
    kegListToBeUpdated.push(keg);
    this.setState({
      masterKegList: kegListToBeUpdated,
      addingNewKeg: false
    });
    setTimeout(() => {
      this.props.recordNewPurchase(keg.cost);
    }, 0);
    setTimeout(() => {
      this.updateBarState();
    }, 0);
  }

  getKegIndex(keg, arr) {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i].id == keg.id) {
        return i;
      }
    }
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
          <style jsx>{`
            .add {
              background-color: lightgreen;
              border-radius: 5px;
              position: relative;
              bottom: 58px;
              left: 140px;
              padding-top: 15px;
              padding-bottom: 15px;
              margin-bottom: -100px;
            }
          `}</style>
          <button className="add" onClick={() => this.addNewKeg()}>
            Add new Keg
          </button>
          <div>
            <KegList
              updateKegControlState={this.updateKegControlStateFromKeg}
              onClickDeleteMenu={this.showDeleteMenu}
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
          updateKegControlState={this.updateKegControlStateFromDeleteMenu}
          onClickDelete={this.handleDeletingKegFromList}
          kegList={this.state.masterKegList}
        />
      );
    } else {
      return (
        <AddKegForm onClickingAddNewKeg={this.updateStateFromAddKegForm} />
      );
    }
  }
}
export default KegControl;
