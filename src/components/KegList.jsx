import React from "react";
import Keg from "./Keg";
import PropTypes from "prop-types";

function KegList(props) {
  return (
    <div>
      <style jsx>{`
        .kegList {
          display: flex;
          flex-wrap: wrap;
        }
      `}</style>
      <div className="kegList">
        {props.kegList.map(keg => (
          <Keg
            onClickDelete={props.onClickDelete}
            recordSale={props.recordSale}
            key={keg.id}
            name={keg.name}
            ABV={keg.ABV}
            price={keg.price}
            cost={keg.cost}
            beersLeft={keg.beersLeft}
            id={keg.id}
          />
        ))}
      </div>
    </div>
  );
}

KegList.propTypes = {
  kegList: PropTypes.array,
  onAddingNewKeg: PropTypes.func
};

export default KegList;
