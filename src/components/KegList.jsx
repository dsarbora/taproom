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
        .delete {
          background-color: red;
          border-radius: 5px;
          margin-top: 5px;
          position: relative;
          bottom: 98px;
          left: 250px;
          padding-top: 15px;
          padding-bottom: 15px;
          margin-bottom: -50px;
        }
      `}</style>
      <div>
        <button className="delete" onClick={() => props.onClickDeleteMenu()}>
          Delete A Keg
        </button>
      </div>
      <div className="kegList">
        {props.kegList.map((keg, index) => (
          <Keg
            updateKegControlState={props.updateKegControlState}
            onClickDelete={props.onClickDelete}
            recordSale={props.recordSale}
            key={keg.id}
            id={keg.id}
            status={props.kegList[index]}
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
