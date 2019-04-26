import React from "react";
import Keg from "./Keg";
import PropTypes from "prop-types";

function KegList(props) {
  console.log(props.kegList);
  return (
    <div>
      {props.kegList.map((keg, index) => (
        <Keg key={index} name={keg.name} ABV={keg.ABV} price={keg.price} />
      ))}
    </div>
  );
}

KegList.propTypes = {
  kegList: PropTypes.array,
  onAddingNewKeg: PropTypes.func
};

export default KegList;
