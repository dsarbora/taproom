import React from "react";

function DeleteKeg(props) {
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
          background-color: red;
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

        .delete {
        }

        button:hover {
          box-shadow: 0 0 0 rgba(0, 0, 0, 0);
          background-color: lightgreen;
          color: black;
        }
      `}</style>
      <p>
        {/* <button className="delete" onClick={() => this.onClickDelete()}>
              Delete Keg
            </button> */}
        <strong>{props.keg.name}</strong>
      </p>
      <p>Should have {props.keg.beersLeft} beers left.</p>

      <button
        className="delete"
        onClick={() => props.updateKegControlState(props.keg)}
      >
        Delete this keg
      </button>
    </div>
  );
}

export default DeleteKeg;
