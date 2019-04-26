import React from "react";

function Keg(props) {
  return (
    <div className="frame">
      <style jsx>{`
        .frame {
          width: 200px;
          height: 200px;
          border: 1px solid black;
        }
      `}</style>
      <p>{props.name}</p>
      <p>{props.ABV} ABV</p>
      <p>${props.price}</p>
    </div>
  );
}

export default Keg;
