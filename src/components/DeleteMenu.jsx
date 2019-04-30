import React from "react";
import DeleteKeg from "./DeleteKeg";

function DeleteMenu(props) {
  return (
    <div>
      {props.kegList.map(keg => (
        <DeleteKeg
          updateKegControlState={props.updateKegControlState}
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
  );
}

export default DeleteMenu;
