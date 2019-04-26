import React from "react";

class KegControl extends Component {
  constructor(props) {
    super(props);
    this.state = {
      masterKegList: []
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

  render() {
    <div>
      <p>Keg Control Works</p>
    </div>;
  }
}

export default KegControl;
