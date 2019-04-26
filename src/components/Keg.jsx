import React, {Component} from "react";

class Keg extends Component {
    constructor(props){
        super(props);
        this.state={
            beersLeft: 125
        }
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
          transform: scale(1.05);
          box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.2);
        }
      `}</style>
      <p>
        <strong>{props.name}</strong>
      </p>
      <p>{props.ABV} ABV</p>
      <p>${props.price}</p>
      <button onClick={()=>this.onClickSellButton()} />
    </div>
  );
}
}
export default Keg;
